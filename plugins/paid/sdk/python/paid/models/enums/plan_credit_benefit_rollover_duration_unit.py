from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanCreditBenefitRolloverDurationUnit(str, Enum):
    DAYS = "days"
    MONTHS = "months"

    __str__ = str.__str__


PlanCreditBenefitRolloverDurationUnitOrStr: TypeAlias = Annotated[
    PlanCreditBenefitRolloverDurationUnit | str, open_enum_validator(PlanCreditBenefitRolloverDurationUnit)
]
