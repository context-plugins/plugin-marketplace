from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionDataStatus(str, Enum):
    """The status of the subscription."""

    VALIDATING = "validating"
    INVALID = "invalid"
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    NEEDS_ATTENTION = "needs_attention"

    __str__ = str.__str__


SubscriptionDataStatusOrStr: TypeAlias = Annotated[
    SubscriptionDataStatus | str, open_enum_validator(SubscriptionDataStatus)
]
