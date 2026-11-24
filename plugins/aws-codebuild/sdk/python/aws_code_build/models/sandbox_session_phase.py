from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.phase_status import PhaseStatusOrStr
from .phase_context import PhaseContext, PhaseContextDict


class SandboxSessionPhase(SdkBaseModel):
    phase_type: Optional[str] = Field(default=UNSET, alias="phaseType")
    """The name of the sandbox phase."""

    phase_status: Optional[PhaseStatusOrStr] = Field(default=UNSET, alias="phaseStatus")
    """The current status of the sandbox phase. Valid values include: FAILED The sandbox phase failed. FAULT The sandbox
    phase faulted. IN_PROGRESS The sandbox phase is still in progress. STOPPED The sandbox phase stopped. SUCCEEDED The
    sandbox phase succeeded. TIMED_OUT The sandbox phase timed out."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the sandbox phase started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the sandbox phase ended, expressed in Unix time format."""

    duration_in_seconds: Optional[int] = Field(default=UNSET, alias="durationInSeconds")
    """How long, in seconds, between the starting and ending times of the sandbox's phase."""

    contexts: Optional[list[PhaseContext]] = UNSET
    """An array of PhaseContext objects."""


class SandboxSessionPhaseDict(TypedDict):
    phase_type: NotRequired[str]
    phase_status: NotRequired[PhaseStatusOrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    duration_in_seconds: NotRequired[int]
    contexts: NotRequired[list[PhaseContextDict]]
