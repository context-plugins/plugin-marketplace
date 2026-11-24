from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .alert_ignore_values_range import AlertIgnoreValuesRange, AlertIgnoreValuesRangeDict
from .enums.condition import Condition, ConditionOrStr
from .enums.currency import CurrencyOrStr
from .enums.data_source import DataSource, DataSourceOrStr
from .enums.metric_filter_text import MetricFilterTextOrStr
from .enums.time_interval import TimeIntervalOrStr
from .external_config_filter import ExternalConfigFilter, ExternalConfigFilterDict
from .metric_config import MetricConfig, MetricConfigDict


class AlertConfig(SdkBaseModel):
    """Parameters that define when and how an alert is evaluated."""

    ignore_values_range: OptionalNullable[AlertIgnoreValuesRange] = Field(default=UNSET, alias="ignoreValuesRange")
    """Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the metric units, not
    percentage-change units, and must satisfy lowerBound <= upperBound. Omission on PATCH preserves the range; null
    clears it. Changing condition away from percentage-change clears the range; supplying a non-null range with another
    condition is rejected."""

    data_source: DataSourceOrStr = Field(default=DataSource.BILLING, alias="dataSource")
    """Data source used to query data for the alert. Affects which dimensions and metrics are available."""

    scopes: Optional[list[ExternalConfigFilter]] = UNSET
    """All supplied filters are applied together (AND across filters). Values within each filter follow its matching
    mode. Nonempty scopes replace legacy attributions. On PATCH, omission preserves scopes and [] clears them. With
    neither scopes nor attributions, evaluation covers all available billing data for the customer."""

    metric: MetricConfig
    """Define how metrics are selected and filtered in reports."""

    currency: Optional[CurrencyOrStr] = UNSET
    """Currency code for monetary values."""

    time_interval: TimeIntervalOrStr = Field(alias="timeInterval")
    """The period each evaluation looks at."""

    condition: ConditionOrStr = Condition.PERCENTAGE_CHANGE
    """Type of comparison for the alert threshold (used with ``operator`` and ``value``). If omitted on create, defaults
    to ``percentage-change``."""

    operator: MetricFilterTextOrStr
    """Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than)."""

    value: float
    """The ``condition`` threshold value. For example, actual metric threshold value for the ``value`` condition, or
    percentage change threshold value for the ``percentage-change`` condition."""

    evaluate_for_each: Optional[str] = Field(default=UNSET, alias="evaluateForEach")
    """Add a dimension to break down the evaluation of the condition. For example, evaluate a condition over an
    attribution for each "Service". Use type:id from GET /analytics/v1/dimensions, for example
    fixed:service_description. An empty string on PATCH clears the breakdown. Not allowed with condition: ``forecast``.
    Used when you Investigate an alert, the dimension becomes the report grouping."""


class AlertConfigDict(TypedDict):
    ignore_values_range: NotRequired[AlertIgnoreValuesRangeDict | None]
    data_source: NotRequired[DataSourceOrStr]
    scopes: NotRequired[list[ExternalConfigFilterDict]]
    metric: MetricConfigDict
    currency: NotRequired[CurrencyOrStr]
    time_interval: TimeIntervalOrStr
    condition: NotRequired[ConditionOrStr]
    operator: MetricFilterTextOrStr
    value: float
    evaluate_for_each: NotRequired[str]
