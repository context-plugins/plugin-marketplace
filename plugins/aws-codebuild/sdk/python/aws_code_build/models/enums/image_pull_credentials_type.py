from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImagePullCredentialsType(str, Enum):
    """The type of credentials CodeBuild uses to pull images in your build. There are two valid values: CODEBUILD
    specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust
    CodeBuild service principal. SERVICE_ROLE specifies that CodeBuild uses your build project's service role. When you
    use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an CodeBuild
    curated image, you must use CODEBUILD credentials."""

    CODEBUILD = "CODEBUILD"
    SERVICE_ROLE = "SERVICE_ROLE"

    __str__ = str.__str__


ImagePullCredentialsTypeOrStr: TypeAlias = Annotated[
    ImagePullCredentialsType | str, open_enum_validator(ImagePullCredentialsType)
]
