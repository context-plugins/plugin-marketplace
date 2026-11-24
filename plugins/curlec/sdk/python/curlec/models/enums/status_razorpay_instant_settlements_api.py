from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayInstantSettlementsApi(str, Enum):
    CREATED = "created"
    INITIATED = "initiated"
    PARTIALLY_PROCESSED = "partially_processed"
    PROCESSED = "processed"
    REVERSED = "reversed"

    __str__ = str.__str__


StatusRazorpayInstantSettlementsApiOrStr: TypeAlias = Annotated[
    StatusRazorpayInstantSettlementsApi | str, open_enum_validator(StatusRazorpayInstantSettlementsApi)
]
