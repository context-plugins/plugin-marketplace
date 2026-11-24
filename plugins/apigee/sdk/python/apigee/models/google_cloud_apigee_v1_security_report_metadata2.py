from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityReportMetadata2(SdkBaseModel):
    """Metadata contains information like metrics, dimenstions etc of the security report."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """MIME type / Output format."""

    time_unit: Optional[str] = Field(default=UNSET, alias="timeUnit")
    """Query GroupBy time unit. Example: "seconds", "minute", "hour"
    """

    start_timestamp: Optional[str] = Field(default=UNSET, alias="startTimestamp")
    """Start timestamp of the query range."""

    dimensions: Optional[list[str]] = UNSET
    """Dimensions of the SecurityReport."""

    metrics: Optional[list[str]] = UNSET
    """Metrics of the SecurityReport. Example: ["name:bot_count,func:sum,alias:sum_bot_count"]"""

    end_timestamp: Optional[str] = Field(default=UNSET, alias="endTimestamp")
    """End timestamp of the query range."""


class GoogleCloudApigeeV1SecurityReportMetadata2Dict(TypedDict):
    mime_type: NotRequired[str]
    time_unit: NotRequired[str]
    start_timestamp: NotRequired[str]
    dimensions: NotRequired[list[str]]
    metrics: NotRequired[list[str]]
    end_timestamp: NotRequired[str]
