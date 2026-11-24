from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType),
]
