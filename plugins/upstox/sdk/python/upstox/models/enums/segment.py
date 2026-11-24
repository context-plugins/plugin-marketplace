from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Segment(str, Enum):
    BSE_EQ = "BSE_EQ"
    NSE_EQ = "NSE_EQ"
    NCD_FO = "NCD_FO"
    BCD_FO = "BCD_FO"
    NSE_FO = "NSE_FO"
    BSE_FO = "BSE_FO"
    BSE_MF = "BSE_MF"
    MCX_FO = "MCX_FO"
    NSE_COM = "NSE_COM"

    __str__ = str.__str__


SegmentOrStr: TypeAlias = Annotated[Segment | str, open_enum_validator(Segment)]
