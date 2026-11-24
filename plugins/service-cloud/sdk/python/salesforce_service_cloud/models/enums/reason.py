from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Reason the session ended."""

    CLIENT_REQUEST = "ClientRequest"
    TRANSFER_FAILED_NOT_CONFIGURED = "TransferFailedNotConfigured"
    ACTION = "Action"
    ERROR = "Error"
    INFINITE_LOOP_DETECTED = "InfiniteLoopDetected"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
