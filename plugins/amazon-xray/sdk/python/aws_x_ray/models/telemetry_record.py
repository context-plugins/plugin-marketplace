from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .backend_connection_errors import BackendConnectionErrors, BackendConnectionErrorsDict


class TelemetryRecord(SdkBaseModel):
    timestamp: RFC3339DateTime = Field(alias="Timestamp")
    segments_received_count: Optional[int] = Field(default=UNSET, alias="SegmentsReceivedCount")
    segments_sent_count: Optional[int] = Field(default=UNSET, alias="SegmentsSentCount")
    segments_spillover_count: Optional[int] = Field(default=UNSET, alias="SegmentsSpilloverCount")
    segments_rejected_count: Optional[int] = Field(default=UNSET, alias="SegmentsRejectedCount")
    backend_connection_errors: Optional[BackendConnectionErrors] = Field(default=UNSET, alias="BackendConnectionErrors")


class TelemetryRecordDict(TypedDict):
    timestamp: RFC3339DateTime
    segments_received_count: NotRequired[int]
    segments_sent_count: NotRequired[int]
    segments_spillover_count: NotRequired[int]
    segments_rejected_count: NotRequired[int]
    backend_connection_errors: NotRequired[BackendConnectionErrorsDict]
