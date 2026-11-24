from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanCreditBenefitAllocationCadence(str, Enum):
    UPFRONT = "upfront"
    MONTHLY = "monthly"

    __str__ = str.__str__


PlanCreditBenefitAllocationCadenceOrStr: TypeAlias = Annotated[
    PlanCreditBenefitAllocationCadence | str, open_enum_validator(PlanCreditBenefitAllocationCadence)
]
