from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """The type of the view."""

    GRID = "grid"
    FORM = "form"
    CALENDAR = "calendar"
    GALLERY = "gallery"
    KANBAN = "kanban"
    TIMELINE = "timeline"
    BLOCK = "block"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
