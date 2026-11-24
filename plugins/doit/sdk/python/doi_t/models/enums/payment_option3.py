from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentOption3(str, Enum):
    """Payment structure for projected purchases. May be null when not set on the stored projection."""

    NO_UPFRONT = "no_upfront"
    PARTIAL_UPFRONT = "partial_upfront"
    ALL_UPFRONT = "all_upfront"

    __str__ = str.__str__


PaymentOption3OrStr: TypeAlias = Annotated[PaymentOption3 | str, open_enum_validator(PaymentOption3)]
