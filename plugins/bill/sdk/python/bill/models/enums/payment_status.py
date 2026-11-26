from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentStatus(str, Enum):
    """The enum Payment status dto."""

    APPROVING = "APPROVING"
    SCHEDULED = "SCHEDULED"
    PAID = "PAID"
    CANCELLED = "CANCELLED"
    VOID = "VOID"
    ESCHEATED = "ESCHEATED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


PaymentStatusOrStr: TypeAlias = Annotated[PaymentStatus | str, open_enum_validator(PaymentStatus)]
