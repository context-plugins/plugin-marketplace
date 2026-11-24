from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PackageStatus(int, Enum):
    """10 = Pending 30 = Approve 50 = Suspend 70 = Terminated 90 = Delete"""

    VALUE_10 = 10
    VALUE_30 = 30
    VALUE_50 = 50
    VALUE_70 = 70
    VALUE_90 = 90

    __str__ = str.__str__


PackageStatusOrInt: TypeAlias = Annotated[PackageStatus | int, open_enum_validator(PackageStatus)]
