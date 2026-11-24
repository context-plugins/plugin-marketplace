from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Product4(str, Enum):
    """Shows if the order was either Intraday, Delivery, CO or OCO"""

    I_ = "I"
    D = "D"
    CO = "CO"
    OCO = "OCO"
    MTF = "MTF"

    __str__ = str.__str__


Product4OrStr: TypeAlias = Annotated[Product4 | str, open_enum_validator(Product4)]
