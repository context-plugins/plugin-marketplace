from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServerType(str, Enum):
    """The source provider used for this project."""

    GITHUB = "GITHUB"
    BITBUCKET = "BITBUCKET"
    GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE"
    GITLAB = "GITLAB"
    GITLAB_SELF_MANAGED = "GITLAB_SELF_MANAGED"

    __str__ = str.__str__


ServerTypeOrStr: TypeAlias = Annotated[ServerType | str, open_enum_validator(ServerType)]
