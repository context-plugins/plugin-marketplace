from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentOption1(str, Enum):
    """Upfront payment structure for this Savings Plan."""

    NO_UPFRONT = "no_upfront"
    PARTIAL_UPFRONT = "partial_upfront"
    ALL_UPFRONT = "all_upfront"

    __str__ = str.__str__


PaymentOption1OrStr: TypeAlias = Annotated[PaymentOption1 | str, open_enum_validator(PaymentOption1)]
