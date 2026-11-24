from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    """The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION."""

    GITHUB_ORGANIZATION = "GITHUB_ORGANIZATION"
    GITHUB_GLOBAL = "GITHUB_GLOBAL"
    GITLAB_GROUP = "GITLAB_GROUP"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]
