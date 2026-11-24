from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpaySubscriptionsApi(str, Enum):
    """Subscription lifecycle status. created→authenticated (mandate authorized)→active→completed/cancelled/expired.
    pending=charge retry scheduled; halted=multiple failures; paused=temporarily stopped."""

    CREATED = "created"
    AUTHENTICATED = "authenticated"
    ACTIVE = "active"
    PENDING = "pending"
    HALTED = "halted"
    CANCELLED = "cancelled"
    COMPLETED = "completed"
    EXPIRED = "expired"
    PAUSED = "paused"

    __str__ = str.__str__


StatusRazorpaySubscriptionsApiOrStr: TypeAlias = Annotated[
    StatusRazorpaySubscriptionsApi | str, open_enum_validator(StatusRazorpaySubscriptionsApi)
]
