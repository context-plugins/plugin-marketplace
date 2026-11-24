from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayPaymentDowntimesApi(str, Enum):
    SCHEDULED = "scheduled"
    STARTED = "started"
    RESOLVED = "resolved"
    UPDATED = "updated"

    __str__ = str.__str__


StatusRazorpayPaymentDowntimesApiOrStr: TypeAlias = Annotated[
    StatusRazorpayPaymentDowntimesApi | str, open_enum_validator(StatusRazorpayPaymentDowntimesApi)
]
