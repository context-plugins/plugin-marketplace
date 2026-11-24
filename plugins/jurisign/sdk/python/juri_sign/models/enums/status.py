from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    DRAFT = "draft"
    PROCESSING = "processing"
    SENDING = "sending"
    COMPLETED = "completed"
    PARTIALLY_SENT = "partially_sent"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
