from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessModel(str, Enum):
    B2_B = "B2B"
    B2_C = "B2C"
    B2_G = "B2G"

    __str__ = str.__str__


BusinessModelOrStr: TypeAlias = Annotated[BusinessModel | str, open_enum_validator(BusinessModel)]
