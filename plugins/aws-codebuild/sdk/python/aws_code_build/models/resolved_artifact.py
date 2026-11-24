from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type6_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)


class ResolvedArtifact(SdkBaseModel):
    type_: Optional[Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(default=UNSET, alias="type")
    """Specifies the type of artifact."""

    location: Optional[str] = UNSET
    """The location of the artifact."""

    identifier: Optional[str] = UNSET
    """The identifier of the artifact."""


class ResolvedArtifactDict(TypedDict):
    type_: NotRequired[Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    location: NotRequired[str]
    identifier: NotRequired[str]
