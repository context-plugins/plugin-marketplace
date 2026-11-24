from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionExpandedStatus2(str, Enum):
    """The status of the subscription matching the email address for this publication"""

    VALIDATING = "validating"
    INVALID = "invalid"
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    NEEDS_ATTENTION = "needs_attention"
    PAUSED = "paused"

    __str__ = str.__str__


SubscriptionExpandedStatus2OrStr: TypeAlias = Annotated[
    SubscriptionExpandedStatus2 | str, open_enum_validator(SubscriptionExpandedStatus2)
]
