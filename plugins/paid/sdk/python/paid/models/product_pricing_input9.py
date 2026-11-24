from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_pricing_input_discriminator_mapping_usage_cost_plus_billing_frequency import (
    ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequencyOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_cost_plus_billing_type import (
    ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType,
    ProductPricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr,
)
from .enums.product_pricing_input_discriminator_mapping_usage_cost_plus_signal_type import (
    ProductPricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr,
)
from .product_simple_price_point import ProductSimplePricePoint, ProductSimplePricePointDict


class ProductPricingInput9(SdkBaseModel):
    """UsageCostPlus variant"""

    pricing_type: Literal["UsageCostPlus"] = Field(default="UsageCostPlus", alias="pricingType")
    """Discriminator value: UsageCostPlus"""

    cost_plus_multiplier: float = Field(alias="costPlusMultiplier")
    signal_type: Optional[ProductPricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: ProductPricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr = Field(
        default=ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType.ARREARS, alias="billingType"
    )
    price_points: Optional[list[ProductSimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class ProductPricingInput9Dict(TypedDict):
    pricing_type: Literal["UsageCostPlus"]
    cost_plus_multiplier: float
    signal_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr]
    billing_frequency: NotRequired[ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[ProductPricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr]
    price_points: NotRequired[list[ProductSimplePricePointDict]]
