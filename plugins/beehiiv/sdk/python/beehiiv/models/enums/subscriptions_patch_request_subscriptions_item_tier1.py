from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsPatchRequestSubscriptionsItemTier1(str, Enum):
    """Optional parameter to set the tier for this subscription."""

    FREE = "free"
    PREMIUM = "premium"

    __str__ = str.__str__


SubscriptionsPatchRequestSubscriptionsItemTier1OrStr: TypeAlias = Annotated[
    SubscriptionsPatchRequestSubscriptionsItemTier1 | str,
    open_enum_validator(SubscriptionsPatchRequestSubscriptionsItemTier1),
]
