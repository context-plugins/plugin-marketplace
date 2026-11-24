from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.build_status_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .resolved_artifact import ResolvedArtifact, ResolvedArtifactDict


class BuildSummary(SdkBaseModel):
    arn: Optional[str] = UNSET
    """The batch build ARN."""

    requested_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="requestedOn")
    """When the build was started, expressed in Unix time format."""

    build_status: Optional[BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(
        default=UNSET, alias="buildStatus"
    )
    """The status of the build group. FAILED The build group failed. FAULT The build group faulted. IN_PROGRESS The
    build group is still in progress. STOPPED The build group stopped. SUCCEEDED The build group succeeded. TIMED_OUT
    The build group timed out."""

    primary_artifact: Optional[ResolvedArtifact] = Field(default=UNSET, alias="primaryArtifact")
    secondary_artifacts: Optional[list[ResolvedArtifact]] = Field(default=UNSET, alias="secondaryArtifacts")
    """An array of ResolvedArtifact objects that represents the secondary build artifacts for the build group."""


class BuildSummaryDict(TypedDict):
    arn: NotRequired[str]
    requested_on: NotRequired[RFC3339DateTime]
    build_status: NotRequired[BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    primary_artifact: NotRequired[ResolvedArtifactDict]
    secondary_artifacts: NotRequired[list[ResolvedArtifactDict]]
