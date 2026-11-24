from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingModelType(str, Enum):
    PER_UNIT = "PerUnit"
    VOLUME_PRICING = "VolumePricing"
    GRADUATED_PRICING = "GraduatedPricing"
    PREPAID_CREDITS = "PrepaidCredits"

    __str__ = str.__str__


PricingModelTypeOrStr: TypeAlias = Annotated[PricingModelType | str, open_enum_validator(PricingModelType)]
