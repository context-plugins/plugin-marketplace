from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1RazorpayOrdersApi(str, Enum):
    """created: initiated. authorized: bank approved, not yet captured. captured: funds collected. refunded: fully
    refunded. failed: transaction failed."""

    CREATED = "created"
    AUTHORIZED = "authorized"
    CAPTURED = "captured"
    REFUNDED = "refunded"
    FAILED = "failed"

    __str__ = str.__str__


Status1RazorpayOrdersApiOrStr: TypeAlias = Annotated[
    Status1RazorpayOrdersApi | str, open_enum_validator(Status1RazorpayOrdersApi)
]
