from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit(str, Enum):
    DAYS = "days"
    MONTHS = "months"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnitOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit),
]
