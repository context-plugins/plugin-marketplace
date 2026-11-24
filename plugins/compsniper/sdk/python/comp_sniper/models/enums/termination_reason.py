from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TerminationReason(str, Enum):
    NATURAL_END = "natural_end"
    MAX_PAGES_REACHED = "maxPages_reached"
    QUOTA_EXHAUSTED = "quota_exhausted"
    UPSTREAM_UNHEALTHY = "upstream_unhealthy"
    CANCELLED = "cancelled"
    TERMINAL_ERROR = "terminal_error"

    __str__ = str.__str__


TerminationReasonOrStr: TypeAlias = Annotated[TerminationReason | str, open_enum_validator(TerminationReason)]
