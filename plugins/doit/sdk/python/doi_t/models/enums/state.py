from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Savings Plan lifecycle state. Values match the AWS Savings Plans API in snake_case."""

    PENDING_RETURN = "pending_return"
    RETURNING = "returning"
    ACTIVE = "active"
    EXPIRED = "expired"
    QUEUED = "queued"
    QUEUED_RETURNING = "queued_returning"
    PAYMENT_FAILED = "payment_failed"
    PAYMENT_PENDING = "payment_pending"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
