import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of visualization or output format. cumulative_comparison requires daily datetime dimensions
 * (year, month, day), total aggregation, one metric, a secondary time range, and no comparative or
 * forecast.
 */
export const ExternalRenderer = {
  ColumnChart: "column_chart",
  StackedColumnChart: "stacked_column_chart",
  BarChart: "bar_chart",
  StackedBarChart: "stacked_bar_chart",
  LineChart: "line_chart",
  SplineChart: "spline_chart",
  AreaChart: "area_chart",
  AreaSplineChart: "area_spline_chart",
  StackedAreaChart: "stacked_area_chart",
  TreemapChart: "treemap_chart",
  SankeyChart: "sankey_chart",
  Table: "table",
  TableHeatmap: "table_heatmap",
  TableRowHeatmap: "table_row_heatmap",
  TableColHeatmap: "table_col_heatmap",
  ColumnAndLineChart: "column_and_line_chart",
  TrendBoard: "trend_board",
  CumulativeComparison: "cumulative_comparison",
} as const;
export type ExternalRenderer = (typeof ExternalRenderer)[keyof typeof ExternalRenderer] | (string & {});

export const externalRendererSchema: EnumSchema<ExternalRenderer> =
  s.enumOf<ExternalRenderer>(ExternalRenderer);
