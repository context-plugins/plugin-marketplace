from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionExpandedSubscriptionTier(str, Enum):
    """The current tier of the subscription."""

    FREE = "free"
    PREMIUM = "premium"

    __str__ = str.__str__


SubscriptionExpandedSubscriptionTierOrStr: TypeAlias = Annotated[
    SubscriptionExpandedSubscriptionTier | str, open_enum_validator(SubscriptionExpandedSubscriptionTier)
]
