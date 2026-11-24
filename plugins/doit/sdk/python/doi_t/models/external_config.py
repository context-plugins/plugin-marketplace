from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .advanced_analysis import AdvancedAnalysis, AdvancedAnalysisDict
from .count import Count, CountDict
from .custom_time_range1 import CustomTimeRange1, CustomTimeRange1Dict
from .dimension_doi_t_reports_api import DimensionDoiTReportsApi, DimensionDoiTReportsApiDict
from .enums.aggregation import AggregationOrStr
from .enums.currency import CurrencyOrStr
from .enums.data_source_doi_t_reports_api import DataSourceDoiTReportsApiOrStr
from .enums.display_values import DisplayValuesOrStr
from .enums.external_renderer import ExternalRendererOrStr
from .enums.limit_aggregation import LimitAggregation, LimitAggregationOrStr
from .enums.sort_dimensions import SortDimensions, SortDimensionsOrStr
from .enums.sort_groups import SortGroups, SortGroupsOrStr
from .enums.time_interval_doi_t_reports_api import TimeIntervalDoiTReportsApiOrStr
from .external_config_filter import ExternalConfigFilter, ExternalConfigFilterDict
from .external_config_metric_filter import ExternalConfigMetricFilter, ExternalConfigMetricFilterDict
from .external_display_settings import ExternalDisplaySettings, ExternalDisplaySettingsDict
from .external_forecast_settings import ExternalForecastSettings, ExternalForecastSettingsDict
from .external_limit_by_change import ExternalLimitByChange, ExternalLimitByChangeDict
from .external_metric import ExternalMetric, ExternalMetricDict
from .external_split import ExternalSplit, ExternalSplitDict
from .group import Group, GroupDict
from .time_settings import TimeSettings, TimeSettingsDict
from .time_settings_secondary import TimeSettingsSecondary, TimeSettingsSecondaryDict


class ExternalConfig(SdkBaseModel):
    """Report configuration."""

    metrics: Optional[list[ExternalMetric]] = UNSET
    """The list of metrics to apply to the report. Custom metric can be used only once. Maximum number of metrics is
    4."""

    metric_filter: Optional[ExternalConfigMetricFilter] = Field(default=UNSET, alias="metricFilter")
    limit_aggregation: LimitAggregationOrStr = Field(default=LimitAggregation.NONE, alias="limitAggregation")
    """Controls how rows excluded by limits are rendered. Applies when any limit type is active (``metricFilter``,
    ``limitByChange``, or a ``group`` entry with a ``limit``). A report may configure at most two of those three limit
    types — not all three. When ``displayValues`` is not ``actuals_only``, this field must be ``none`` (or omitted,
    which defaults to ``none``)."""

    limit_by_change: Optional[ExternalLimitByChange] = Field(default=UNSET, alias="limitByChange")
    aggregation: Optional[AggregationOrStr] = UNSET
    """How to aggregate data values in the report."""

    advanced_analysis: Optional[AdvancedAnalysis] = Field(default=UNSET, alias="advancedAnalysis")
    """Advanced analysis options. Each can be set independently."""

    forecast_settings: Optional[ExternalForecastSettings] = Field(default=UNSET, alias="forecastSettings")
    """Forecast configuration. On PATCH, omit to preserve existing settings; send null to clear/disable forecasting."""

    time_interval: Optional[TimeIntervalDoiTReportsApiOrStr] = Field(default=UNSET, alias="timeInterval")
    """Time interval for grouping data in the report."""

    dimensions: Optional[list[DimensionDoiTReportsApi]] = UNSET
    """See `Dimensions <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#dimensions>`__."""

    time_range: Optional[TimeSettings] = Field(default=UNSET, alias="timeRange")
    """Specify a predefined or custom time range for the report. For example, to specify a custom time range of "last 2
    days", set the mode to ``last``, the amount to ``2``, and the unit to ``day``. If ``includeCurrent`` is ``true``,
    the range will be yesterday and today; otherwise, the range will be yesterday and the day before yesterday. If
    "custom" type is specified, you need to provide a custom time range in the ``customTimeRange`` field."""

    secondary_time_range: Optional[TimeSettingsSecondary] = Field(default=UNSET, alias="secondaryTimeRange")
    """Secondary time range for comparative reports."""

    include_promotional_credits: Optional[bool] = Field(default=UNSET, alias="includePromotionalCredits")
    """Whether to include `promotional credits
    <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#promotional-credits>`__. If set to
    **true**, the report must use time interval ``month``, ``quarter``, or ``year``."""

    include_subtotals: bool = Field(default=False, alias="includeSubtotals")
    """Whether to include subgroup totals in the report. This option has no impact when reading a report via API."""

    filters: Optional[list[ExternalConfigFilter]] = UNSET
    """The filters to apply to the report."""

    group: Optional[list[Group]] = UNSET
    """The rows that appear in the tabular format of the report. See `Group by
    <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#group-by>`__."""

    layout: Optional[ExternalRendererOrStr] = UNSET
    """Type of visualization or output format. cumulative_comparison requires daily datetime dimensions (year, month,
    day), total aggregation, one metric, a secondary time range, and no comparative or forecast."""

    display_values: Optional[DisplayValuesOrStr] = Field(default=UNSET, alias="displayValues")
    """See `View data as (Comparative report)
    <https://help.doit.com/docs/cloud-analytics/reports/editing-your-cloud-report#view-as>`__."""

    currency: Optional[CurrencyOrStr] = UNSET
    """Currency code for monetary values."""

    sort_groups: SortGroupsOrStr = Field(default=SortGroups.ASC, alias="sortGroups")
    """Orders the rows produced by ``group``, both in the console and in a rendered ``fileOutput`` export. ``a_to_z``
    orders them by the dimension value, ``asc``/``desc`` by the metric. It does not reorder the ``rows`` of a JSON
    result."""

    sort_dimensions: SortDimensionsOrStr = Field(default=SortDimensions.DESC, alias="sortDimensions")
    """Orders the columns produced by ``dimensions``, both in the console and in a rendered ``fileOutput`` export. It
    does not reorder the ``rows`` of a JSON result. ``a_to_z`` orders the columns by the dimension value, which for the
    ``year``/``month``/``day`` dimensions of a time series means chronologically. The default ``desc`` orders them by
    the metric instead, so a monthly report charts its priciest month first rather than in time order — set ``a_to_z``
    for a time series you intend to export. A report with a forecast is always charted chronologically and ignores this
    field, and a comparative ``displayValues`` mode requires ``a_to_z``."""

    data_source: Optional[DataSourceDoiTReportsApiOrStr] = Field(default=UNSET, alias="dataSource")
    """Data source of the report."""

    splits: Optional[list[ExternalSplit]] = UNSET
    """The splits to use in the report."""

    display_settings: Optional[ExternalDisplaySettings] = Field(default=UNSET, alias="displaySettings")
    """Display settings for the report."""

    custom_time_range: OptionalNullable[CustomTimeRange1] = Field(default=UNSET, alias="customTimeRange")
    """Required when the time range is set to "custom". On PATCH, omit to preserve the existing range; send null to
    remove it. A PATCH that sets ``timeRange`` to a mode other than "custom" without sending ``customTimeRange`` removes
    it. Sending null while ``timeRange.mode`` stays "custom" is rejected."""

    count: OptionalNullable[Count] = UNSET
    """The field to count distinct values of. Only applicable when aggregation is set to "count". On PATCH, omit to
    preserve the existing field; send null to remove it. A PATCH that sets ``aggregation`` to a value other than "count"
    without sending ``count`` removes it."""


class ExternalConfigDict(TypedDict):
    metrics: NotRequired[list[ExternalMetricDict]]
    metric_filter: NotRequired[ExternalConfigMetricFilterDict]
    limit_aggregation: NotRequired[LimitAggregationOrStr]
    limit_by_change: NotRequired[ExternalLimitByChangeDict]
    aggregation: NotRequired[AggregationOrStr]
    advanced_analysis: NotRequired[AdvancedAnalysisDict]
    forecast_settings: NotRequired[ExternalForecastSettingsDict]
    time_interval: NotRequired[TimeIntervalDoiTReportsApiOrStr]
    dimensions: NotRequired[list[DimensionDoiTReportsApiDict]]
    time_range: NotRequired[TimeSettingsDict]
    secondary_time_range: NotRequired[TimeSettingsSecondaryDict]
    include_promotional_credits: NotRequired[bool]
    include_subtotals: NotRequired[bool]
    filters: NotRequired[list[ExternalConfigFilterDict]]
    group: NotRequired[list[GroupDict]]
    layout: NotRequired[ExternalRendererOrStr]
    display_values: NotRequired[DisplayValuesOrStr]
    currency: NotRequired[CurrencyOrStr]
    sort_groups: NotRequired[SortGroupsOrStr]
    sort_dimensions: NotRequired[SortDimensionsOrStr]
    data_source: NotRequired[DataSourceDoiTReportsApiOrStr]
    splits: NotRequired[list[ExternalSplitDict]]
    display_settings: NotRequired[ExternalDisplaySettingsDict]
    custom_time_range: NotRequired[CustomTimeRange1Dict | None]
    count: NotRequired[CountDict | None]
