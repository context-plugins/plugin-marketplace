from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LendingRateType(str, Enum):
    """The type of rate (fixed, variable, etc)."""

    BUNDLE_DISCOUNT_FIXED = "BUNDLE_DISCOUNT_FIXED"
    BUNDLE_DISCOUNT_VARIABLE = "BUNDLE_DISCOUNT_VARIABLE"
    CASH_ADVANCE = "CASH_ADVANCE"
    DISCOUNT = "DISCOUNT"
    FIXED = "FIXED"
    FLOATING = "FLOATING"
    INTRODUCTORY = "INTRODUCTORY"
    MARKET_LINKED = "MARKET_LINKED"
    PENALTY = "PENALTY"
    PURCHASE = "PURCHASE"
    VARIABLE = "VARIABLE"

    __str__ = str.__str__


LendingRateTypeOrStr: TypeAlias = Annotated[LendingRateType | str, open_enum_validator(LendingRateType)]
