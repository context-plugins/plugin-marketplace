from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TerminationReason(str, Enum):
    LOW_MATCH_RATE = "low_match_rate"
    MATCH_LIMIT_MET = "match_limit_met"
    CANDIDATES_EXHAUSTED = "candidates_exhausted"
    USER_CANCELLED = "user_cancelled"
    ERROR_OCCURRED = "error_occurred"
    TIMEOUT = "timeout"
    INSUFFICIENT_FUNDS = "insufficient_funds"

    __str__ = str.__str__


TerminationReasonOrStr: TypeAlias = Annotated[TerminationReason | str, open_enum_validator(TerminationReason)]
