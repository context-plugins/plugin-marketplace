from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
    BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiDict,
)


class BatchGetBuildsOutput(SdkBaseModel):
    builds: Optional[list[BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]] = UNSET
    """Information about the requested builds."""

    builds_not_found: Optional[list[str]] = Field(default=UNSET, alias="buildsNotFound")
    """The IDs of builds for which information could not be found."""


class BatchGetBuildsOutputDict(TypedDict):
    builds: NotRequired[list[BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiDict]]
    builds_not_found: NotRequired[list[str]]
