from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1RazorpayPaymentLinksApi(str, Enum):
    CAPTURED = "captured"

    __str__ = str.__str__


Status1RazorpayPaymentLinksApiOrStr: TypeAlias = Annotated[
    Status1RazorpayPaymentLinksApi | str, open_enum_validator(Status1RazorpayPaymentLinksApi)
]
