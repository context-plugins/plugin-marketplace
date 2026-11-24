from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_one_time_per_unit_billing_type import (
    PricingInputDiscriminatorMappingOneTimePerUnitBillingType,
    PricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_one_time_per_unit_fee_type import (
    PricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput10(SdkBaseModel):
    """OneTimePerUnit variant"""

    pricing_type: Literal["OneTimePerUnit"] = Field(default="OneTimePerUnit", alias="pricingType")
    """Discriminator value: OneTimePerUnit"""

    fee_type: Optional[PricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr] = Field(
        default=UNSET, alias="feeType"
    )
    billing_type: PricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingOneTimePerUnitBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[SimplePricePoint] = Field(alias="pricePoints")


class PricingInput10Dict(TypedDict):
    pricing_type: Literal["OneTimePerUnit"]
    fee_type: NotRequired[PricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr]
    billing_type: NotRequired[PricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr]
    price_points: list[SimplePricePointDict]
