from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiscountCodeType(str, Enum):
    PERCENTAGE = "percentage"
    FIXED = "fixed"

    __str__ = str.__str__


DiscountCodeTypeOrStr: TypeAlias = Annotated[DiscountCodeType | str, open_enum_validator(DiscountCodeType)]
