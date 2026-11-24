from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class InsertMetricRequestDto(SdkBaseModel):
    title: Optional[str] = UNSET
    """The title of the metric value source. The title of the metric source being inserted into will be updated to match
    this value.If this property is not provided, the existing value on the metric source will not be updated."""

    value: float
    """The metric value to send."""

    annotation: Optional[str] = UNSET
    """The ADF annotation attached to a metric value."""

    timestamp: Optional[RFC3339DateTime] = UNSET
    """The time the metric value was collected."""

    url: Optional[str] = UNSET
    """The url of the metric value source. The url of the metric source being inserted into will be updated to match
    this value. If this property is not provided, the existing value on the metric source will not be updated."""


class InsertMetricRequestDtoDict(TypedDict):
    title: NotRequired[str]
    value: float
    annotation: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
    url: NotRequired[str]
