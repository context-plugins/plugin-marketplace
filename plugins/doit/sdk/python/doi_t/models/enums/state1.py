from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    """Reserved Instance state, tracking the AWS EC2 Reserved Instance API verbatim in external snake_case form. Differs
    from Savings Plan states by design. For example, the terminal state is ``retired`` here vs ``expired`` on Savings
    Plans."""

    ACTIVE = "active"
    RETIRED = "retired"
    PAYMENT_PENDING = "payment_pending"
    PAYMENT_FAILED = "payment_failed"
    QUEUED = "queued"
    QUEUED_DELETED = "queued_deleted"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
