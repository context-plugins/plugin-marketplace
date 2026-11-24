from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1CustomReportMetric(SdkBaseModel):
    """This encapsulates a metric property of the form sum(message_count) where name is message_count and function is
    sum"""

    function: Optional[str] = UNSET
    """aggregate function"""

    name: Optional[str] = UNSET
    """name of the metric"""


class GoogleCloudApigeeV1CustomReportMetricDict(TypedDict):
    function: NotRequired[str]
    name: NotRequired[str]
