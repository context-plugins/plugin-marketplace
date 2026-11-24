from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Validity5(str, Enum):
    """Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)"""

    DAY = "DAY"
    IOC = "IOC"

    __str__ = str.__str__


Validity5OrStr: TypeAlias = Annotated[Validity5 | str, open_enum_validator(Validity5)]
