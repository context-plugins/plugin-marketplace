from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceTypeOverride(str, Enum):
    """A source input type, for this build, that overrides the source input defined in the build project."""

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


SourceTypeOverrideOrStr: TypeAlias = Annotated[SourceTypeOverride | str, open_enum_validator(SourceTypeOverride)]
