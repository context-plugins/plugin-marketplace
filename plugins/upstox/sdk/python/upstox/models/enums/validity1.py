from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Validity1(str, Enum):
    """Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)"""

    DAY = "DAY"
    IOC = "IOC"
    EOS = "EOS"

    __str__ = str.__str__


Validity1OrStr: TypeAlias = Annotated[Validity1 | str, open_enum_validator(Validity1)]
