from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExpandRazorpayOrdersApi(str, Enum):
    PAYMENTS = "payments"
    PAYMENTS_CARD = "payments.card"
    TRANSFERS = "transfers"
    VIRTUAL_ACCOUNT = "virtual_account"

    __str__ = str.__str__


ExpandRazorpayOrdersApiOrStr: TypeAlias = Annotated[
    ExpandRazorpayOrdersApi | str, open_enum_validator(ExpandRazorpayOrdersApi)
]
