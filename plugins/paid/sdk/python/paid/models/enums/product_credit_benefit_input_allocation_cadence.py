from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductCreditBenefitInputAllocationCadence(str, Enum):
    UPFRONT = "upfront"
    MONTHLY = "monthly"

    __str__ = str.__str__


ProductCreditBenefitInputAllocationCadenceOrStr: TypeAlias = Annotated[
    ProductCreditBenefitInputAllocationCadence | str, open_enum_validator(ProductCreditBenefitInputAllocationCadence)
]
