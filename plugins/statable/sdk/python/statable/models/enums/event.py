from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    CREATED = "created"
    ROTATED = "rotated"
    REVOKED = "revoked"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
