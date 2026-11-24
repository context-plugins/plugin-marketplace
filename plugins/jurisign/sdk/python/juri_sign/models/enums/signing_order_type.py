from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SigningOrderType(int, Enum):
    """0 = parallel (all signers at once), 1 = sequential (one after another)"""

    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


SigningOrderTypeOrInt: TypeAlias = Annotated[SigningOrderType | int, open_enum_validator(SigningOrderType)]
