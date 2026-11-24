from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevGatesApi(str, Enum):
    ALLOWED = "allowed"
    DENIED = "denied"
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CHANGES_REQUESTED = "changes_requested"
    EXPIRED = "expired"
    CANCELLED = "cancelled"
    REVOKED = "revoked"
    USED = "used"

    __str__ = str.__str__


StatusDeliverdDevGatesApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevGatesApi | str, open_enum_validator(StatusDeliverdDevGatesApi)
]
