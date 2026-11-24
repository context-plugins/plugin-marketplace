from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobBenefit(str, Enum):
    JOB_BENEFIT_UNSPECIFIED = "JOB_BENEFIT_UNSPECIFIED"
    CHILD_CARE = "CHILD_CARE"
    DENTAL = "DENTAL"
    DOMESTIC_PARTNER = "DOMESTIC_PARTNER"
    FLEXIBLE_HOURS = "FLEXIBLE_HOURS"
    MEDICAL = "MEDICAL"
    LIFE_INSURANCE = "LIFE_INSURANCE"
    PARENTAL_LEAVE = "PARENTAL_LEAVE"
    RETIREMENT_PLAN = "RETIREMENT_PLAN"
    SICK_DAYS = "SICK_DAYS"
    VACATION = "VACATION"
    VISION = "VISION"

    __str__ = str.__str__


JobBenefitOrStr: TypeAlias = Annotated[JobBenefit | str, open_enum_validator(JobBenefit)]
