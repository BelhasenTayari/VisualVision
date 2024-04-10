import ReactApexChart from "react-apexcharts";

const ApexChart = ({ confidence }) => {
  // Convert decimal confidence value to a percentage
  const confidencePercent = (confidence * 100).toFixed(2);

  // Function to determine color stops based on confidence percentage
  const getColorStops = (percent) => {
    if (percent < 25) {
      return [{ offset: 0, color: "#EF4444", opacity: 1 }]; // Red
    } else if (percent < 50) {
      return [{ offset: 0, color: "#FACC15", opacity: 1 }]; // Yellow
    } else if (percent < 75) {
      return [{ offset: 0, color: "#F97316", opacity: 1 }]; // Orange
    } else {
      return [{ offset: 0, color: "#22C55E", opacity: 1 }]; // Green
    }
  };

  // Define chart options and series data
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 100,
        hollow: { margin: 5, size: "70%", background: "transparent" },
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            offsetY: -2,
            fontSize: "17px",
            color: "#fff",
            formatter: () => `${confidencePercent}%`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: getColorStops(confidencePercent),
      },
    },
    labels: ["Confidence"],
  };

  const series = [confidencePercent];

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="170"
      />
    </div>
  );
};

export default ApexChart;
