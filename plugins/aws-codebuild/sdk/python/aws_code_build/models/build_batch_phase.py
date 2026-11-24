from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.phase_status_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .enums.phase_type_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .phase_context import PhaseContext, PhaseContextDict


class BuildBatchPhase(SdkBaseModel):
    phase_type: Optional[PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(
        default=UNSET, alias="phaseType"
    )
    """The name of the batch build phase. Valid values include: COMBINE_ARTIFACTS Build output artifacts are being
    combined and uploaded to the output location. DOWNLOAD_BATCHSPEC The batch build specification is being downloaded.
    FAILED One or more of the builds failed. IN_PROGRESS The batch build is in progress. STOPPED The batch build was
    stopped. SUBMITTED The btach build has been submitted. SUCCEEDED The batch build succeeded."""

    phase_status: Optional[PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(
        default=UNSET, alias="phaseStatus"
    )
    """The current status of the batch build phase. Valid values include: FAILED The build phase failed. FAULT The build
    phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build phase stopped. SUCCEEDED The
    build phase succeeded. TIMED_OUT The build phase timed out."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the batch build phase started, expressed in Unix time format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the batch build phase ended, expressed in Unix time format."""

    duration_in_seconds: Optional[int] = Field(default=UNSET, alias="durationInSeconds")
    """How long, in seconds, between the starting and ending times of the batch build's phase."""

    contexts: Optional[list[PhaseContext]] = UNSET
    """Additional information about the batch build phase. Especially to help troubleshoot a failed batch build."""


class BuildBatchPhaseDict(TypedDict):
    phase_type: NotRequired[PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    phase_status: NotRequired[PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    duration_in_seconds: NotRequired[int]
    contexts: NotRequired[list[PhaseContextDict]]
