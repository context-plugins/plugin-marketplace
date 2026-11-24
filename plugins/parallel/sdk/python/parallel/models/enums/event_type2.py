from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType2(str, Enum):
    """Discriminant for the completion event variant."""

    COMPLETION = "completion"

    __str__ = str.__str__


EventType2OrStr: TypeAlias = Annotated[EventType2 | str, open_enum_validator(EventType2)]
