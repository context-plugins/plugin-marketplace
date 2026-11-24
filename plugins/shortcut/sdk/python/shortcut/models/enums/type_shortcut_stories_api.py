from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeShortcutStoriesApi(str, Enum):
    """Either "backlog", "unstarted", "started", or "done"."""

    STARTED = "started"
    BACKLOG = "backlog"
    UNSTARTED = "unstarted"
    DONE = "done"

    __str__ = str.__str__


TypeShortcutStoriesApiOrStr: TypeAlias = Annotated[
    TypeShortcutStoriesApi | str, open_enum_validator(TypeShortcutStoriesApi)
]
