from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Product3(str, Enum):
    """Signifies if the order was either Intraday, Delivery or MTF"""

    I_ = "I"
    D = "D"
    MTF = "MTF"

    __str__ = str.__str__


Product3OrStr: TypeAlias = Annotated[Product3 | str, open_enum_validator(Product3)]
