from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsPutRequestSubscriptionsItemTier1(str, Enum):
    """Optional parameter to set the tier for this subscription."""

    FREE = "free"
    PREMIUM = "premium"

    __str__ = str.__str__


SubscriptionsPutRequestSubscriptionsItemTier1OrStr: TypeAlias = Annotated[
    SubscriptionsPutRequestSubscriptionsItemTier1 | str,
    open_enum_validator(SubscriptionsPutRequestSubscriptionsItemTier1),
]
