from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class InsertMetricResponseDto(SdkBaseModel):
    """The metric value that was sent into the metric source."""

    metric_source_id: str = Field(alias="metricSourceId")
    """The ID of the metric source."""

    value: float
    """The value of the metric."""

    timestamp: RFC3339DateTime
    """The time the metric value was collected."""

    annotation: OptionalNullable[str] = UNSET
    """The metric value annotation."""


class InsertMetricResponseDtoDict(TypedDict):
    metric_source_id: str
    value: float
    timestamp: RFC3339DateTime
    annotation: NotRequired[str | None]
