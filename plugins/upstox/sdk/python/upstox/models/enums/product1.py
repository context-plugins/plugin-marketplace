from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Product1(str, Enum):
    """Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther"""

    I_ = "I"
    D = "D"
    CO = "CO"
    OCO = "OCO"
    MTF = "MTF"

    __str__ = str.__str__


Product1OrStr: TypeAlias = Annotated[Product1 | str, open_enum_validator(Product1)]
