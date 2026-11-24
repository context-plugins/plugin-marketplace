from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCallnodeIoMessagingApi(str, Enum):
    QUEUED = "queued"
    SENT = "sent"
    DELIVERED = "delivered"
    FAILED = "failed"

    __str__ = str.__str__


StatusCallnodeIoMessagingApiOrStr: TypeAlias = Annotated[
    StatusCallnodeIoMessagingApi | str, open_enum_validator(StatusCallnodeIoMessagingApi)
]
