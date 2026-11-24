from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Exchange1(str, Enum):
    """Exchange to which the order is associated"""

    NSE = "NSE"
    NFO = "NFO"
    CDS = "CDS"
    BSE = "BSE"
    BFO = "BFO"
    BCD = "BCD"
    MCX = "MCX"
    NSCOM = "NSCOM"

    __str__ = str.__str__


Exchange1OrStr: TypeAlias = Annotated[Exchange1 | str, open_enum_validator(Exchange1)]
