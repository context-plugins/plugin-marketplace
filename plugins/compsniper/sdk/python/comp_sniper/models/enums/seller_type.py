from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SellerType(str, Enum):
    PRIVATE = "private"
    BUSINESS = "business"

    __str__ = str.__str__


SellerTypeOrStr: TypeAlias = Annotated[SellerType | str, open_enum_validator(SellerType)]
