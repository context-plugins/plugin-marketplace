from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_code import StatusCodeOrStr
from .timestamp_metric_value_pair import TimestampMetricValuePair, TimestampMetricValuePairDict


class CloudWatchMetricsDataSummary(SdkBaseModel):
    timestamp_metric_value_pair_list: Optional[list[TimestampMetricValuePair]] = Field(
        default=UNSET, alias="TimestampMetricValuePairList"
    )
    """This is a list of Amazon CloudWatch metric values at given timestamp."""

    status_code: Optional[StatusCodeOrStr] = Field(default=UNSET, alias="StatusCode")
    """This is an enum of the status showing whether the metric value pair list has partial or complete data, or if
    there was an error."""


class CloudWatchMetricsDataSummaryDict(TypedDict):
    timestamp_metric_value_pair_list: NotRequired[list[TimestampMetricValuePairDict]]
    status_code: NotRequired[StatusCodeOrStr]
