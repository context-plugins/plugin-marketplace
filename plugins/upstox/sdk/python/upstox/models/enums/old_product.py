from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OldProduct(str, Enum):
    """Indicates the old product to use for the convert positions"""

    I_ = "I"
    D = "D"
    CO = "CO"
    OCO = "OCO"
    MTF = "MTF"

    __str__ = str.__str__


OldProductOrStr: TypeAlias = Annotated[OldProduct | str, open_enum_validator(OldProduct)]
