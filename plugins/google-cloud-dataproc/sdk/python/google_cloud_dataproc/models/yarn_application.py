from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class YarnApplication(SdkBaseModel):
    """A YARN application created by a job. Application information is a subset of
    org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing
    purposes only. It may be changed before final release."""

    memory_mb_seconds: Optional[str] = Field(default=UNSET, alias="memoryMbSeconds")
    """Optional. The cumulative memory usage of the application for a job, measured in mb-seconds."""

    progress: Optional[float] = UNSET
    """Required. The numerical progress of the application, from 1 to 100."""

    state: Optional[StateOrStr] = UNSET
    """Required. The application state."""

    name: Optional[str] = UNSET
    """Required. The application name."""

    tracking_url: Optional[str] = Field(default=UNSET, alias="trackingUrl")
    """Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides
    application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution
    and, possibly, access."""

    vcore_seconds: Optional[str] = Field(default=UNSET, alias="vcoreSeconds")
    """Optional. The cumulative CPU time consumed by the application for a job, measured in vcore-seconds."""


class YarnApplicationDict(TypedDict):
    memory_mb_seconds: NotRequired[str]
    progress: NotRequired[float]
    state: NotRequired[StateOrStr]
    name: NotRequired[str]
    tracking_url: NotRequired[str]
    vcore_seconds: NotRequired[str]
