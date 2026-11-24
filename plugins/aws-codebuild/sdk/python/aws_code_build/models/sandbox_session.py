from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .logs_location import LogsLocation, LogsLocationDict
from .network_interface import NetworkInterface, NetworkInterfaceDict
from .sandbox_session_phase import SandboxSessionPhase, SandboxSessionPhaseDict


class SandboxSession(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the sandbox session."""

    status: Optional[str] = UNSET
    """The status of the sandbox session."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the sandbox session started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the sandbox session ended, expressed in Unix time format."""

    current_phase: Optional[str] = Field(default=UNSET, alias="currentPhase")
    """The current phase for the sandbox."""

    phases: Optional[list[SandboxSessionPhase]] = UNSET
    """An array of SandboxSessionPhase objects."""

    resolved_source_version: Optional[str] = Field(default=UNSET, alias="resolvedSourceVersion")
    """An identifier for the version of this sandbox's source code."""

    logs: Optional[LogsLocation] = UNSET
    network_interface: Optional[NetworkInterface] = Field(default=UNSET, alias="networkInterface")


class SandboxSessionDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    current_phase: NotRequired[str]
    phases: NotRequired[list[SandboxSessionPhaseDict]]
    resolved_source_version: NotRequired[str]
    logs: NotRequired[LogsLocationDict]
    network_interface: NotRequired[NetworkInterfaceDict]
