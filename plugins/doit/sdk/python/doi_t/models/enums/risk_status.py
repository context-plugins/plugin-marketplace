from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskStatus(str, Enum):
    """Server-computed risk classification, based on current utilization and forecasted breach date relative to the
    configured amount and current period end. "atRisk" - the budget has already exceeded its configured amount, or its
    forecast projects it will before the current period ends. "onTrack" - the budget has forecast data and is neither
    over budget nor projected to breach. "unknown" - no forecast data is available yet, the budget is a fixed budget
    whose period has already expired, or the budget is invalid/draft."""

    AT_RISK = "atRisk"
    ON_TRACK = "onTrack"
    UNKNOWN = "unknown"

    __str__ = str.__str__


RiskStatusOrStr: TypeAlias = Annotated[RiskStatus | str, open_enum_validator(RiskStatus)]
