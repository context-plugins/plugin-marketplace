from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    PENDING_RETURN = "pending_return"
    RETURNING = "returning"
    ACTIVE = "active"
    EXPIRED = "expired"
    QUEUED = "queued"
    QUEUED_RETURNING = "queued_returning"
    PAYMENT_FAILED = "payment_failed"
    PAYMENT_PENDING = "payment_pending"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
