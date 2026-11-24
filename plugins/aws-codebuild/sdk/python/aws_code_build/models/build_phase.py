from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.phase_status_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr,
)
from .enums.phase_type import PhaseTypeOrStr
from .phase_context import PhaseContext, PhaseContextDict


class BuildPhase(SdkBaseModel):
    phase_type: Optional[PhaseTypeOrStr] = Field(default=UNSET, alias="phaseType")
    """The name of the build phase. Valid values include: BUILD Core build activities typically occur in this build
    phase. COMPLETED The build has been completed. DOWNLOAD_SOURCE Source code is being downloaded in this build phase.
    FINALIZING The build process is completing in this build phase. INSTALL Installation activities typically occur in
    this build phase. POST_BUILD Post-build activities typically occur in this build phase. PRE_BUILD Pre-build
    activities typically occur in this build phase. PROVISIONING The build environment is being set up. QUEUED The build
    has been submitted and is queued be"""

    phase_status: Optional[PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr] = Field(
        default=UNSET, alias="phaseStatus"
    )
    """The current status of the build phase. Valid values include: FAILED The build phase failed. FAULT The build phase
    faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build phase stopped. SUCCEEDED The build
    phase succeeded. TIMED_OUT The build phase timed out."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the build phase started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the build phase ended, expressed in Unix time format."""

    duration_in_seconds: Optional[int] = Field(default=UNSET, alias="durationInSeconds")
    """How long, in seconds, between the starting and ending times of the build's phase."""

    contexts: Optional[list[PhaseContext]] = UNSET
    """Additional information about a build phase, especially to help troubleshoot a failed build."""


class BuildPhaseDict(TypedDict):
    phase_type: NotRequired[PhaseTypeOrStr]
    phase_status: NotRequired[PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    duration_in_seconds: NotRequired[int]
    contexts: NotRequired[list[PhaseContextDict]]
