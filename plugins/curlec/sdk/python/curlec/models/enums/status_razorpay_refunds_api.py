from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayRefundsApi(str, Enum):
    """pending: being processed. processed: credited to customer. failed: refund failed."""

    PENDING = "pending"
    PROCESSED = "processed"
    FAILED = "failed"

    __str__ = str.__str__


StatusRazorpayRefundsApiOrStr: TypeAlias = Annotated[
    StatusRazorpayRefundsApi | str, open_enum_validator(StatusRazorpayRefundsApi)
]
