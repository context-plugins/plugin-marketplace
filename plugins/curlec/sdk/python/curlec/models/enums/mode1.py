from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode1(str, Enum):
    """Case-sensitive"""

    NEFT = "NEFT"
    RTGS = "RTGS"
    IMPS = "IMPS"
    UPI = "UPI"
    CARD = "card"
    AMAZONPAY = "amazonpay"

    __str__ = str.__str__


Mode1OrStr: TypeAlias = Annotated[Mode1 | str, open_enum_validator(Mode1)]
