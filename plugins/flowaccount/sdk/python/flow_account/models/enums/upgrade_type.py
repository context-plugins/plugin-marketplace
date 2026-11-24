from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UpgradeType(int, Enum):
    """1 = Upgrade 3 = Renew 5 = ChangePackage"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


UpgradeTypeOrInt: TypeAlias = Annotated[UpgradeType | int, open_enum_validator(UpgradeType)]
