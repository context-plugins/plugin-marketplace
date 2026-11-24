from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentOption(str, Enum):
    """Payment structure for a new or recommended commitment."""

    NO_UPFRONT = "no_upfront"
    PARTIAL_UPFRONT = "partial_upfront"
    ALL_UPFRONT = "all_upfront"

    __str__ = str.__str__


PaymentOptionOrStr: TypeAlias = Annotated[PaymentOption | str, open_enum_validator(PaymentOption)]
