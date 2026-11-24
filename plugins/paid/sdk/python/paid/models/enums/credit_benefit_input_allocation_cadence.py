from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditBenefitInputAllocationCadence(str, Enum):
    UPFRONT = "upfront"
    MONTHLY = "monthly"

    __str__ = str.__str__


CreditBenefitInputAllocationCadenceOrStr: TypeAlias = Annotated[
    CreditBenefitInputAllocationCadence | str, open_enum_validator(CreditBenefitInputAllocationCadence)
]
