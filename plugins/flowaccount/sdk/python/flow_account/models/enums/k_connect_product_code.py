from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KConnectProductCode(int, Enum):
    """1 = PCT 3 = PPA 5 = PPB"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


KConnectProductCodeOrInt: TypeAlias = Annotated[KConnectProductCode | int, open_enum_validator(KConnectProductCode)]
