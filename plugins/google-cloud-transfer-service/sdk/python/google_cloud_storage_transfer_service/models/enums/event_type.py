from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    TRANSFER_OPERATION_SUCCESS = "TRANSFER_OPERATION_SUCCESS"
    TRANSFER_OPERATION_FAILED = "TRANSFER_OPERATION_FAILED"
    TRANSFER_OPERATION_ABORTED = "TRANSFER_OPERATION_ABORTED"

    __str__ = str.__str__


EventTypeOrStr: TypeAlias = Annotated[EventType | str, open_enum_validator(EventType)]
