from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BlockedReason(str, Enum):
    BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"
    NO_REVENUE_METRICS = "NO_REVENUE_METRICS"
    NO_COST_METRICS = "NO_COST_METRICS"

    __str__ = str.__str__


BlockedReasonOrStr: TypeAlias = Annotated[BlockedReason | str, open_enum_validator(BlockedReason)]
