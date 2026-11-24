from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Product(str, Enum):
    I_ = "I"
    D = "D"
    CO = "CO"
    OCO = "OCO"
    MTF = "MTF"

    __str__ = str.__str__


ProductOrStr: TypeAlias = Annotated[Product | str, open_enum_validator(Product)]
