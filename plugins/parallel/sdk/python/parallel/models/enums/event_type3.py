from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType3(str, Enum):
    """Discriminant for the error event variant."""

    ERROR = "error"

    __str__ = str.__str__


EventType3OrStr: TypeAlias = Annotated[EventType3 | str, open_enum_validator(EventType3)]
