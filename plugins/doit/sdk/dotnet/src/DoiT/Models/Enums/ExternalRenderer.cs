using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of visualization or output format. cumulative_comparison requires daily datetime dimensions (year, month, day), total aggregation, one metric, a secondary time range, and no comparative or forecast.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExternalRenderer>))]
public sealed record ExternalRenderer : OpenStringEnum<ExternalRenderer>
{
    private ExternalRenderer(string value) : base(value)
    {
    }

    public static readonly ExternalRenderer ColumnChart = new("column_chart");

    public static readonly ExternalRenderer StackedColumnChart = new("stacked_column_chart");

    public static readonly ExternalRenderer BarChart = new("bar_chart");

    public static readonly ExternalRenderer StackedBarChart = new("stacked_bar_chart");

    public static readonly ExternalRenderer LineChart = new("line_chart");

    public static readonly ExternalRenderer SplineChart = new("spline_chart");

    public static readonly ExternalRenderer AreaChart = new("area_chart");

    public static readonly ExternalRenderer AreaSplineChart = new("area_spline_chart");

    public static readonly ExternalRenderer StackedAreaChart = new("stacked_area_chart");

    public static readonly ExternalRenderer TreemapChart = new("treemap_chart");

    public static readonly ExternalRenderer SankeyChart = new("sankey_chart");

    public static readonly ExternalRenderer Table = new("table");

    public static readonly ExternalRenderer TableHeatmap = new("table_heatmap");

    public static readonly ExternalRenderer TableRowHeatmap = new("table_row_heatmap");

    public static readonly ExternalRenderer TableColHeatmap = new("table_col_heatmap");

    public static readonly ExternalRenderer ColumnAndLineChart = new("column_and_line_chart");

    public static readonly ExternalRenderer TrendBoard = new("trend_board");

    public static readonly ExternalRenderer CumulativeComparison = new("cumulative_comparison");

    public TResult Match<TResult>(Func<TResult> onColumnChart,
        Func<TResult> onStackedColumnChart,
        Func<TResult> onBarChart,
        Func<TResult> onStackedBarChart,
        Func<TResult> onLineChart,
        Func<TResult> onSplineChart,
        Func<TResult> onAreaChart,
        Func<TResult> onAreaSplineChart,
        Func<TResult> onStackedAreaChart,
        Func<TResult> onTreemapChart,
        Func<TResult> onSankeyChart,
        Func<TResult> onTable,
        Func<TResult> onTableHeatmap,
        Func<TResult> onTableRowHeatmap,
        Func<TResult> onTableColHeatmap,
        Func<TResult> onColumnAndLineChart,
        Func<TResult> onTrendBoard,
        Func<TResult> onCumulativeComparison,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ColumnChart => onColumnChart(),
            _ when this == StackedColumnChart => onStackedColumnChart(),
            _ when this == BarChart => onBarChart(),
            _ when this == StackedBarChart => onStackedBarChart(),
            _ when this == LineChart => onLineChart(),
            _ when this == SplineChart => onSplineChart(),
            _ when this == AreaChart => onAreaChart(),
            _ when this == AreaSplineChart => onAreaSplineChart(),
            _ when this == StackedAreaChart => onStackedAreaChart(),
            _ when this == TreemapChart => onTreemapChart(),
            _ when this == SankeyChart => onSankeyChart(),
            _ when this == Table => onTable(),
            _ when this == TableHeatmap => onTableHeatmap(),
            _ when this == TableRowHeatmap => onTableRowHeatmap(),
            _ when this == TableColHeatmap => onTableColHeatmap(),
            _ when this == ColumnAndLineChart => onColumnAndLineChart(),
            _ when this == TrendBoard => onTrendBoard(),
            _ when this == CumulativeComparison => onCumulativeComparison(),
            _ => otherwise(Value)
        };

    public void Match(Action onColumnChart,
        Action onStackedColumnChart,
        Action onBarChart,
        Action onStackedBarChart,
        Action onLineChart,
        Action onSplineChart,
        Action onAreaChart,
        Action onAreaSplineChart,
        Action onStackedAreaChart,
        Action onTreemapChart,
        Action onSankeyChart,
        Action onTable,
        Action onTableHeatmap,
        Action onTableRowHeatmap,
        Action onTableColHeatmap,
        Action onColumnAndLineChart,
        Action onTrendBoard,
        Action onCumulativeComparison,
        Action<string> otherwise)
    {
        if (this == ColumnChart) onColumnChart();
        else if (this == StackedColumnChart) onStackedColumnChart();
        else if (this == BarChart) onBarChart();
        else if (this == StackedBarChart) onStackedBarChart();
        else if (this == LineChart) onLineChart();
        else if (this == SplineChart) onSplineChart();
        else if (this == AreaChart) onAreaChart();
        else if (this == AreaSplineChart) onAreaSplineChart();
        else if (this == StackedAreaChart) onStackedAreaChart();
        else if (this == TreemapChart) onTreemapChart();
        else if (this == SankeyChart) onSankeyChart();
        else if (this == Table) onTable();
        else if (this == TableHeatmap) onTableHeatmap();
        else if (this == TableRowHeatmap) onTableRowHeatmap();
        else if (this == TableColHeatmap) onTableColHeatmap();
        else if (this == ColumnAndLineChart) onColumnAndLineChart();
        else if (this == TrendBoard) onTrendBoard();
        else if (this == CumulativeComparison) onCumulativeComparison();
        else otherwise(Value);
    }
}
