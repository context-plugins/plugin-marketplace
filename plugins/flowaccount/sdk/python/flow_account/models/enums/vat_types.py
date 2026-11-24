from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VatTypes(int, Enum):
    """1 = Include 3 = Exclude 5 = Zero 7 = None"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7

    __str__ = str.__str__


VatTypesOrInt: TypeAlias = Annotated[VatTypes | int, open_enum_validator(VatTypes)]
