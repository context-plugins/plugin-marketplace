from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingOneTimePerUnitFeeType(str, Enum):
    SETUP = "setup"
    ONBOARDING = "onboarding"
    IMPLEMENTATION = "implementation"
    MIGRATION = "migration"
    CUSTOM = "custom"

    __str__ = str.__str__


PricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingOneTimePerUnitFeeType | str,
    open_enum_validator(PricingInputDiscriminatorMappingOneTimePerUnitFeeType),
]
