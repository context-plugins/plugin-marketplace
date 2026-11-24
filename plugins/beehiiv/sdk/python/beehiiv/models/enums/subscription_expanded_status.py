from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionExpandedStatus(str, Enum):
    """The status of the subscription.<br>``validating`` - The email address is being validated.<br>``invalid`` - The
    email address is invalid.<br>``pending`` - The email address is valid, but the subscription is pending double
    opt-in.<br>``active`` - The email was valid and the subscription is active.<br>``inactive`` - The subscription was
    made inactive, possibly due to an unsubscribe.<br>``needs_attention`` - The subscription requires approval or
    denial.<br>``paused`` - The subscriber has paused their subscription."""

    VALIDATING = "validating"
    INVALID = "invalid"
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    NEEDS_ATTENTION = "needs_attention"
    PAUSED = "paused"

    __str__ = str.__str__


SubscriptionExpandedStatusOrStr: TypeAlias = Annotated[
    SubscriptionExpandedStatus | str, open_enum_validator(SubscriptionExpandedStatus)
]
