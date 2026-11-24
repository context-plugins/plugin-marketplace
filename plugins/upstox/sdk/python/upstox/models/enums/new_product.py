from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewProduct(str, Enum):
    """Indicates the new product to use for the convert positions"""

    I_ = "I"
    D = "D"
    CO = "CO"
    OCO = "OCO"
    MTF = "MTF"

    __str__ = str.__str__


NewProductOrStr: TypeAlias = Annotated[NewProduct | str, open_enum_validator(NewProduct)]
