from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayQrCodesApi(str, Enum):
    ACTIVE = "active"
    CLOSED = "closed"

    __str__ = str.__str__


StatusRazorpayQrCodesApiOrStr: TypeAlias = Annotated[
    StatusRazorpayQrCodesApi | str, open_enum_validator(StatusRazorpayQrCodesApi)
]
