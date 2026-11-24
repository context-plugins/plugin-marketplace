from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType(str, Enum):
    """The type of event that has occurred"""

    REVOKED = "revoked"
    EXPIRED = "expired"
    UPDATED = "updated"
    CREATED = "created"
    ARCHIVED = "archived"
    DELETED = "deleted"

    __str__ = str.__str__


EventTypeOrStr: TypeAlias = Annotated[EventType | str, open_enum_validator(EventType)]
