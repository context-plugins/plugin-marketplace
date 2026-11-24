from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1QueryMetadata(SdkBaseModel):
    dimensions: Optional[list[str]] = UNSET
    """Dimensions of the AsyncQuery."""

    end_timestamp: Optional[str] = Field(default=UNSET, alias="endTimestamp")
    """End timestamp of the query range."""

    time_unit: Optional[str] = Field(default=UNSET, alias="timeUnit")
    """Query GroupBy time unit."""

    start_timestamp: Optional[str] = Field(default=UNSET, alias="startTimestamp")
    """Start timestamp of the query range."""

    output_format: Optional[str] = Field(default=UNSET, alias="outputFormat")
    """Output format."""

    metrics: Optional[list[str]] = UNSET
    """Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"]"""


class GoogleCloudApigeeV1QueryMetadataDict(TypedDict):
    dimensions: NotRequired[list[str]]
    end_timestamp: NotRequired[str]
    time_unit: NotRequired[str]
    start_timestamp: NotRequired[str]
    output_format: NotRequired[str]
    metrics: NotRequired[list[str]]
