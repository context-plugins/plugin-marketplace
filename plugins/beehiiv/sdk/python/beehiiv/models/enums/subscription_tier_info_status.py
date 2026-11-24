from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionTierInfoStatus(str, Enum):
    """Returns whether or not the tier has any active prices."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


SubscriptionTierInfoStatusOrStr: TypeAlias = Annotated[
    SubscriptionTierInfoStatus | str, open_enum_validator(SubscriptionTierInfoStatus)
]
