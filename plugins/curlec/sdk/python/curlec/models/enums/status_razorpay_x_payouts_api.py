from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayXPayoutsApi(str, Enum):
    QUEUED = "queued"
    PENDING = "pending"
    REJECTED = "rejected"
    PROCESSING = "processing"
    PROCESSED = "processed"
    CANCELLED = "cancelled"
    REVERSED = "reversed"
    FAILED = "failed"

    __str__ = str.__str__


StatusRazorpayXPayoutsApiOrStr: TypeAlias = Annotated[
    StatusRazorpayXPayoutsApi | str, open_enum_validator(StatusRazorpayXPayoutsApi)
]
