from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingMode1(str, Enum):
    """The billing mode of the connection."""

    PAY_AS_YOU_GO = "PayAsYouGo"
    FLAT_RATE_TIER1 = "FlatRateTier1"
    FLAT_RATE_TIER2 = "FlatRateTier2"
    FLAT_RATE_TIER3 = "FlatRateTier3"
    FLAT_RATE_TIER4 = "FlatRateTier4"
    FLAT_RATE_TIER5 = "FlatRateTier5"
    PORT_PAIR_FLAT_RATE_TIER1 = "PortPairFlatRateTier1"
    PORT_PAIR_FLAT_RATE_TIER2 = "PortPairFlatRateTier2"
    PORT_PAIR_FLAT_RATE_TIER3 = "PortPairFlatRateTier3"
    PORT_PAIR_FLAT_RATE_TIER4 = "PortPairFlatRateTier4"
    PORT_PAIR_FLAT_RATE_TIER5 = "PortPairFlatRateTier5"

    __str__ = str.__str__


BillingMode1OrStr: TypeAlias = Annotated[BillingMode1 | str, open_enum_validator(BillingMode1)]
