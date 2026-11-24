from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentOption(str, Enum):
    """One of - card / direct banking / COD (cash) / other"""

    CARD = "card"
    DIRECT_BANKING = "direct banking"
    COD = "cod"
    OTHER = "other"

    __str__ = str.__str__


PaymentOptionOrStr: TypeAlias = Annotated[PaymentOption | str, open_enum_validator(PaymentOption)]
