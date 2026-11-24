from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code2(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    BAD_REQUEST = "bad_request"
    MISSING_PARAM = "missing_param"
    REGION_REQUIRED = "region_required"
    UNKNOWN_SPORT = "unknown_sport"
    UNKNOWN_MARKET = "unknown_market"
    UNKNOWN_BOOKMAKER = "unknown_bookmaker"
    UNKNOWN_EXCHANGE = "unknown_exchange"

    __str__ = str.__str__


Code2OrStr: TypeAlias = Annotated[Code2 | str, open_enum_validator(Code2)]
