from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3(str, Enum):
    """The type of monitor."""

    EVENT_STREAM = "event_stream"
    SNAPSHOT = "snapshot"

    __str__ = str.__str__


Type3OrStr: TypeAlias = Annotated[Type3 | str, open_enum_validator(Type3)]
