from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingMode2(str, Enum):
    """The billing mode for the connection."""

    PAY_AS_YOU_GO = "PayAsYouGo"
    FLAT_RATE_TIER1 = "FlatRateTier1"
    FLAT_RATE_TIER2 = "FlatRateTier2"
    FLAT_RATE_TIER3 = "FlatRateTier3"
    FLAT_RATE_TIER4 = "FlatRateTier4"
    FLAT_RATE_TIER5 = "FlatRateTier5"

    __str__ = str.__str__


BillingMode2OrStr: TypeAlias = Annotated[BillingMode2 | str, open_enum_validator(BillingMode2)]
