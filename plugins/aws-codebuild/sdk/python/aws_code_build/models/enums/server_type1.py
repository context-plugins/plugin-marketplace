from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServerType1(str, Enum):
    """The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or
    BITBUCKET."""

    GITHUB = "GITHUB"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"
    GITLAB = "GITLAB"
    GITLAB_SELF_MANAGED = "GITLAB_SELF_MANAGED"

    __str__ = str.__str__


ServerType1OrStr: TypeAlias = Annotated[ServerType1 | str, open_enum_validator(ServerType1)]
