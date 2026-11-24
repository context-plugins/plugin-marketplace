from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsCreateRequestTier(str, Enum):
    """The tier for this subscription."""

    FREE = "free"
    PREMIUM = "premium"

    __str__ = str.__str__


SubscriptionsCreateRequestTierOrStr: TypeAlias = Annotated[
    SubscriptionsCreateRequestTier | str, open_enum_validator(SubscriptionsCreateRequestTier)
]
