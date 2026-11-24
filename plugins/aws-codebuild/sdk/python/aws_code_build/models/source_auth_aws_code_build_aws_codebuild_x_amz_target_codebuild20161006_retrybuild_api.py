from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr,
)


class SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(SdkBaseModel):
    type_: Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr = Field(alias="type")
    """The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER."""

    resource: Optional[str] = UNSET
    """The resource value that applies to the specified authorization type."""


class SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict(TypedDict):
    type_: Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr
    resource: NotRequired[str]
