from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """The source input type that overrides the source input defined in the batch build project."""

    CODECOMMIT = "CODECOMMIT"
    CODEPIPELINE = "CODEPIPELINE"
    GITHUB = "GITHUB"
    GITLAB = "GITLAB"
    GITLAB_SELF_MANAGED = "GITLAB_SELF_MANAGED"
    S3 = "S3"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"
    NO_SOURCE = "NO_SOURCE"

    __str__ = str.__str__


SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
