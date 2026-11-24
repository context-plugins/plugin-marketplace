from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeRazorpayXPayoutsApi(str, Enum):
    """Transfer mode — case-sensitive. amazonpay limited to ₹10,000 per transaction; no custom narration allowed."""

    NEFT = "NEFT"
    RTGS = "RTGS"
    IMPS = "IMPS"
    UPI = "UPI"
    CARD = "card"
    AMAZONPAY = "amazonpay"

    __str__ = str.__str__


ModeRazorpayXPayoutsApiOrStr: TypeAlias = Annotated[
    ModeRazorpayXPayoutsApi | str, open_enum_validator(ModeRazorpayXPayoutsApi)
]
