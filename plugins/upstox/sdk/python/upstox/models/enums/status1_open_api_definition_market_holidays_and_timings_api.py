from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1OpenApiDefinitionMarketHolidaysAndTimingsApi(str, Enum):
    """The CAS (Collateral Auction Session / Closing Auction Session) status of the segment."""

    NORMAL_OPEN = "NORMAL_OPEN"
    NORMAL_CLOSE = "NORMAL_CLOSE"
    PRE_OPEN_START = "PRE_OPEN_START"
    PRE_OPEN_END = "PRE_OPEN_END"
    CLOSING_START = "CLOSING_START"
    CLOSING_END = "CLOSING_END"
    CTS_CLOSE = "CTS_CLOSE"
    CAS_LM_START = "CAS_LM_START"
    CAS_M_STOP = "CAS_M_STOP"
    CAS_STOP = "CAS_STOP"

    __str__ = str.__str__


Status1OpenApiDefinitionMarketHolidaysAndTimingsApiOrStr: TypeAlias = Annotated[
    Status1OpenApiDefinitionMarketHolidaysAndTimingsApi | str,
    open_enum_validator(Status1OpenApiDefinitionMarketHolidaysAndTimingsApi),
]
