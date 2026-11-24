from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The event's type. One of track, identify, page, screen, or group. Required."""

    TRACK = "track"
    IDENTIFY = "identify"
    PAGE = "page"
    SCREEN = "screen"
    GROUP = "group"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
