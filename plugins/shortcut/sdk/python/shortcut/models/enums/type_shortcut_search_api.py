from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeShortcutSearchApi(str, Enum):
    """The service this Identity is for."""

    SLACK = "slack"
    GITHUB = "github"
    GITLAB = "gitlab"
    BITBUCKET = "bitbucket"

    __str__ = str.__str__


TypeShortcutSearchApiOrStr: TypeAlias = Annotated[
    TypeShortcutSearchApi | str, open_enum_validator(TypeShortcutSearchApi)
]
