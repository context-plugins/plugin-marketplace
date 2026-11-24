from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Exchange(str, Enum):
    NSE = "NSE"
    NFO = "NFO"
    CDS = "CDS"
    BSE = "BSE"
    BFO = "BFO"
    BCD = "BCD"
    MCX = "MCX"
    NSCOM = "NSCOM"

    __str__ = str.__str__


ExchangeOrStr: TypeAlias = Annotated[Exchange | str, open_enum_validator(Exchange)]
