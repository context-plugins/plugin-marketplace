from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingSeatBasedVolumeBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingSeatBasedVolumeBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingSeatBasedVolumeBillingType),
]
