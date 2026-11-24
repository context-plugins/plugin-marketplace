from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatedRole(str, Enum):
    BUYER = "buyer"
    SELLER = "seller"
    SUPPLIER = "supplier"
    INVESTOR = "investor"
    OPERATOR = "operator"

    __str__ = str.__str__


StatedRoleOrStr: TypeAlias = Annotated[StatedRole | str, open_enum_validator(StatedRole)]
