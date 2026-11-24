from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayOrdersApi(str, Enum):
    """created: awaiting payment. attempted: payment attempted but not captured. paid: fully paid."""

    CREATED = "created"
    ATTEMPTED = "attempted"
    PAID = "paid"

    __str__ = str.__str__


StatusRazorpayOrdersApiOrStr: TypeAlias = Annotated[
    StatusRazorpayOrdersApi | str, open_enum_validator(StatusRazorpayOrdersApi)
]
