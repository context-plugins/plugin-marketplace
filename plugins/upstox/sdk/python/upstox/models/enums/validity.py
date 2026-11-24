from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Validity(str, Enum):
    """It can be one of the following - DAY(default), IOC"""

    DAY = "DAY"
    IOC = "IOC"

    __str__ = str.__str__


ValidityOrStr: TypeAlias = Annotated[Validity | str, open_enum_validator(Validity)]
