from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType1(str, Enum):
    """Discriminant for the snapshot event variant."""

    SNAPSHOT = "snapshot"

    __str__ = str.__str__


EventType1OrStr: TypeAlias = Annotated[EventType1 | str, open_enum_validator(EventType1)]
