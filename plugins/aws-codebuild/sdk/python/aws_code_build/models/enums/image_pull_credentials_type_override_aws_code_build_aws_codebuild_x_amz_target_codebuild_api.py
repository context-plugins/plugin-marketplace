from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values: CODEBUILD
    Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust
    CodeBuild's service principal. SERVICE_ROLE Specifies that CodeBuild uses your build project's service role. When
    using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an CodeBuild
    curated image, you must use CODEBUILD credentials."""

    CODEBUILD = "CODEBUILD"
    SERVICE_ROLE = "SERVICE_ROLE"

    __str__ = str.__str__


ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(ImagePullCredentialsTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
