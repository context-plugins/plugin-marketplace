from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsListRequestStatus(str, Enum):
    VALIDATING = "validating"
    INVALID = "invalid"
    PENDING = "pending"
    ACTIVE = "active"
    INACTIVE = "inactive"
    ALL = "all"

    __str__ = str.__str__


SubscriptionsListRequestStatusOrStr: TypeAlias = Annotated[
    SubscriptionsListRequestStatus | str, open_enum_validator(SubscriptionsListRequestStatus)
]
