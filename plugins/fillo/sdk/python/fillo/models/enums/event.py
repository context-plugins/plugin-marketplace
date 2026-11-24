from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    RESPONSE_CREATED = "response.created"
    RESPONSE_UPDATED = "response.updated"
    DRAFT_ABANDONED = "draft.abandoned"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
