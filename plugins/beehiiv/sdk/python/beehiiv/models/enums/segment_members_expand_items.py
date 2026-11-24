from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SegmentMembersExpandItems(str, Enum):
    STATS = "stats"
    CUSTOM_FIELDS = "custom_fields"
    REFERRALS = "referrals"
    TAGS = "tags"
    SUBSCRIPTION_PREMIUM_TIERS = "subscription_premium_tiers"

    __str__ = str.__str__


SegmentMembersExpandItemsOrStr: TypeAlias = Annotated[
    SegmentMembersExpandItems | str, open_enum_validator(SegmentMembersExpandItems)
]
