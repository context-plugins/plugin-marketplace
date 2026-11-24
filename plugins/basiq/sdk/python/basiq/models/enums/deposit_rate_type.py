from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DepositRateType(str, Enum):
    """The type of rate (base, bonus, etc)."""

    BONUS = "BONUS"
    BUNDLE_BONUS = "BUNDLE_BONUS"
    FIXED = "FIXED"
    FLOATING = "FLOATING"
    INTRODUCTORY = "INTRODUCTORY"
    MARKET_LINKED = "MARKET_LINKED"
    VARIABLE = "VARIABLE"

    __str__ = str.__str__


DepositRateTypeOrStr: TypeAlias = Annotated[DepositRateType | str, open_enum_validator(DepositRateType)]
