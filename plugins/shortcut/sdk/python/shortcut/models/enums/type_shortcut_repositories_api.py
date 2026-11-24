from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeShortcutRepositoriesApi(str, Enum):
    """The VCS provider for the Repository."""

    GITHUB = "github"
    GITLAB = "gitlab"
    BITBUCKET = "bitbucket"

    __str__ = str.__str__


TypeShortcutRepositoriesApiOrStr: TypeAlias = Annotated[
    TypeShortcutRepositoriesApi | str, open_enum_validator(TypeShortcutRepositoriesApi)
]
