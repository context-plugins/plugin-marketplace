from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .alert_ignore_values_range import AlertIgnoreValuesRange, AlertIgnoreValuesRangeDict
from .enums.condition1 import Condition1OrStr
from .enums.currency import CurrencyOrStr
from .enums.data_source1 import DataSource1OrStr
from .enums.metric_filter_text import MetricFilterTextOrStr
from .enums.time_interval1 import TimeInterval1OrStr
from .external_config_filter import ExternalConfigFilter, ExternalConfigFilterDict
from .metric_config import MetricConfig, MetricConfigDict


class AlertConfigUpdate(SdkBaseModel):
    """Only supplied configuration fields change. A zero value is a valid threshold. Fields cannot be null except
    ignoreValuesRange."""

    ignore_values_range: OptionalNullable[AlertIgnoreValuesRange] = Field(default=UNSET, alias="ignoreValuesRange")
    """Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the metric units, not
    percentage-change units, and must satisfy lowerBound <= upperBound. Omission on PATCH preserves the range; null
    clears it. Changing condition away from percentage-change clears the range; supplying a non-null range with another
    condition is rejected."""

    data_source: Optional[DataSource1OrStr] = Field(default=UNSET, alias="dataSource")
    """Omission preserves the saved data source. Tokenomics requires customer enablement."""

    scopes: Optional[list[ExternalConfigFilter]] = UNSET
    """All supplied filters are applied together (AND across filters). Values within each filter follow its matching
    mode. Omission preserves scopes and [] clears them."""

    metric: Optional[MetricConfig] = UNSET
    """Define how metrics are selected and filtered in reports."""

    currency: Optional[CurrencyOrStr] = UNSET
    """Currency code for monetary values."""

    time_interval: Optional[TimeInterval1OrStr] = Field(default=UNSET, alias="timeInterval")
    """The period each evaluation looks at. Omission preserves the saved interval."""

    condition: Optional[Condition1OrStr] = UNSET
    """Omission preserves the saved condition."""

    operator: Optional[MetricFilterTextOrStr] = UNSET
    """Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than)."""

    value: Optional[float] = UNSET
    """The ``condition`` threshold value. Omission preserves the saved value; an explicit 0 is a valid threshold."""

    evaluate_for_each: Optional[str] = Field(default=UNSET, alias="evaluateForEach")
    """Add a dimension to break down the evaluation of the condition. Use type:id from GET /analytics/v1/dimensions, for
    example fixed:service_description. Omission preserves the saved breakdown and an empty string clears it. Not allowed
    with condition: ``forecast``."""


class AlertConfigUpdateDict(TypedDict):
    ignore_values_range: NotRequired[AlertIgnoreValuesRangeDict | None]
    data_source: NotRequired[DataSource1OrStr]
    scopes: NotRequired[list[ExternalConfigFilterDict]]
    metric: NotRequired[MetricConfigDict]
    currency: NotRequired[CurrencyOrStr]
    time_interval: NotRequired[TimeInterval1OrStr]
    condition: NotRequired[Condition1OrStr]
    operator: NotRequired[MetricFilterTextOrStr]
    value: NotRequired[float]
    evaluate_for_each: NotRequired[str]
