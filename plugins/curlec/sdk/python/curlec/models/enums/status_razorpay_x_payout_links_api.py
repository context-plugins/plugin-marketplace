from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayXPayoutLinksApi(str, Enum):
    PENDING = "pending"
    ISSUED = "issued"
    PROCESSING = "processing"
    PROCESSED = "processed"
    CANCELLED = "cancelled"
    REJECTED = "rejected"

    __str__ = str.__str__


StatusRazorpayXPayoutLinksApiOrStr: TypeAlias = Annotated[
    StatusRazorpayXPayoutLinksApi | str, open_enum_validator(StatusRazorpayXPayoutLinksApi)
]
