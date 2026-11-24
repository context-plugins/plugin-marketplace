from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PartnerPricePlanType(str, Enum):
    """The enum partner price plan."""

    PRICE_PLAN1 = "PricePlan1"
    PRICE_PLAN2 = "PricePlan2"
    PRICE_PLAN3 = "PricePlan3"
    PRICE_PLAN4 = "PricePlan4"
    PRICE_PLAN5 = "PricePlan5"

    __str__ = str.__str__


PartnerPricePlanTypeOrStr: TypeAlias = Annotated[PartnerPricePlanType | str, open_enum_validator(PartnerPricePlanType)]
