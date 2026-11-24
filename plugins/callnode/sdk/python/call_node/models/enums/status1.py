from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """``queued`` only for the moment the message is being handed over (a list can catch it); the send answers ``sent``
    or ``failed``."""

    QUEUED = "queued"
    SENT = "sent"
    DELIVERED = "delivered"
    DELAYED = "delayed"
    BOUNCED = "bounced"
    COMPLAINED = "complained"
    FAILED = "failed"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
