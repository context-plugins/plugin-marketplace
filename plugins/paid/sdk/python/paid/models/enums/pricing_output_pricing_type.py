from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingOutputPricingType(str, Enum):
    RECURRING_PER_UNIT = "RecurringPerUnit"
    RECURRING_GRADUATED = "RecurringGraduated"
    RECURRING_VOLUME = "RecurringVolume"
    RECURRING_PERCENT_OF_TOTAL = "RecurringPercentOfTotal"
    USAGE_PER_UNIT = "UsagePerUnit"
    USAGE_GRADUATED = "UsageGraduated"
    USAGE_VOLUME = "UsageVolume"
    USAGE_PREPAID_CREDITS = "UsagePrepaidCredits"
    USAGE_BRACKETED_PREPAID_CREDITS = "UsageBracketedPrepaidCredits"
    USAGE_COST_PLUS = "UsageCostPlus"
    ONE_TIME_PER_UNIT = "OneTimePerUnit"
    SEAT_BASED_PER_UNIT = "SeatBasedPerUnit"
    SEAT_BASED_GRADUATED = "SeatBasedGraduated"
    SEAT_BASED_VOLUME = "SeatBasedVolume"
    SEAT_BASED_PREPAID_CREDITS = "SeatBasedPrepaidCredits"

    __str__ = str.__str__


PricingOutputPricingTypeOrStr: TypeAlias = Annotated[
    PricingOutputPricingType | str, open_enum_validator(PricingOutputPricingType)
]
