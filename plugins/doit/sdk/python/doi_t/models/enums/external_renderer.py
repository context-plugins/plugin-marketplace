from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExternalRenderer(str, Enum):
    """Type of visualization or output format. cumulative_comparison requires daily datetime dimensions (year, month,
    day), total aggregation, one metric, a secondary time range, and no comparative or forecast."""

    COLUMN_CHART = "column_chart"
    STACKED_COLUMN_CHART = "stacked_column_chart"
    BAR_CHART = "bar_chart"
    STACKED_BAR_CHART = "stacked_bar_chart"
    LINE_CHART = "line_chart"
    SPLINE_CHART = "spline_chart"
    AREA_CHART = "area_chart"
    AREA_SPLINE_CHART = "area_spline_chart"
    STACKED_AREA_CHART = "stacked_area_chart"
    TREEMAP_CHART = "treemap_chart"
    SANKEY_CHART = "sankey_chart"
    TABLE = "table"
    TABLE_HEATMAP = "table_heatmap"
    TABLE_ROW_HEATMAP = "table_row_heatmap"
    TABLE_COL_HEATMAP = "table_col_heatmap"
    COLUMN_AND_LINE_CHART = "column_and_line_chart"
    TREND_BOARD = "trend_board"
    CUMULATIVE_COMPARISON = "cumulative_comparison"

    __str__ = str.__str__


ExternalRendererOrStr: TypeAlias = Annotated[ExternalRenderer | str, open_enum_validator(ExternalRenderer)]
