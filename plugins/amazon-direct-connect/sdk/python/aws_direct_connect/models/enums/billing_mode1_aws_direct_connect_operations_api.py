from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingMode1AwsDirectConnectOperationsApi(str, Enum):
    """The billing mode to apply to the specified connections. The valid values are PayAsYouGo, FlatRateTier1,
    FlatRateTier2, FlatRateTier3, FlatRateTier4, and FlatRateTier5."""

    PAY_AS_YOU_GO = "PayAsYouGo"
    FLAT_RATE_TIER1 = "FlatRateTier1"
    FLAT_RATE_TIER2 = "FlatRateTier2"
    FLAT_RATE_TIER3 = "FlatRateTier3"
    FLAT_RATE_TIER4 = "FlatRateTier4"
    FLAT_RATE_TIER5 = "FlatRateTier5"

    __str__ = str.__str__


BillingMode1AwsDirectConnectOperationsApiOrStr: TypeAlias = Annotated[
    BillingMode1AwsDirectConnectOperationsApi | str, open_enum_validator(BillingMode1AwsDirectConnectOperationsApi)
]
