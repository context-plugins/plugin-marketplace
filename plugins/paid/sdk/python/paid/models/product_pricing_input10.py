from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_one_time_per_unit_billing_type import (
    ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType,
    ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_one_time_per_unit_fee_type import (
    ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput10(SdkBaseModel):
    """OneTimePerUnit variant"""

    pricing_type: Literal["OneTimePerUnit"] = Field(default="OneTimePerUnit", alias="pricingType")
    """Discriminator value: OneTimePerUnit"""

    fee_type: Optional[ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr] = Field(
        default=UNSET, alias="feeType"
    )
    billing_type: ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType.ADVANCE, alias="billingType"
    )
    price_points: list[ProductSimplePricePoint] = Field(alias="pricePoints")


class ProductPricingInput10Dict(TypedDict):
    pricing_type: Literal["OneTimePerUnit"]
    fee_type: NotRequired[ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeTypeOrStr]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr]
    price_points: list[ProductSimplePricePointDict]
