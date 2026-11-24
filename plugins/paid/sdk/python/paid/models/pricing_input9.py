from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pricing_input_discriminator_mapping_usage_cost_plus_billing_frequency import (
    PricingInputDiscriminatorMappingUsageCostPlusBillingFrequencyOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_cost_plus_billing_type import (
    PricingInputDiscriminatorMappingUsageCostPlusBillingType,
    PricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr,
)
from .enums.pricing_input_discriminator_mapping_usage_cost_plus_signal_type import (
    PricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr,
)
from .simple_price_point import SimplePricePoint, SimplePricePointDict


class PricingInput9(SdkBaseModel):
    """UsageCostPlus variant"""

    pricing_type: Literal["UsageCostPlus"] = Field(default="UsageCostPlus", alias="pricingType")
    """Discriminator value: UsageCostPlus"""

    cost_plus_multiplier: float = Field(alias="costPlusMultiplier")
    signal_type: Optional[PricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr] = Field(
        default=UNSET, alias="signalType"
    )
    billing_frequency: Optional[PricingInputDiscriminatorMappingUsageCostPlusBillingFrequencyOrStr] = Field(
        default=UNSET, alias="billingFrequency"
    )
    billing_frequency_custom_months: Optional[int] = Field(default=UNSET, alias="billingFrequencyCustomMonths")
    billing_type: PricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr = Field(
        default=PricingInputDiscriminatorMappingUsageCostPlusBillingType.ARREARS, alias="billingType"
    )
    price_points: Optional[list[SimplePricePoint]] = Field(default=UNSET, alias="pricePoints")


class PricingInput9Dict(TypedDict):
    pricing_type: Literal["UsageCostPlus"]
    cost_plus_multiplier: float
    signal_type: NotRequired[PricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr]
    billing_frequency: NotRequired[PricingInputDiscriminatorMappingUsageCostPlusBillingFrequencyOrStr]
    billing_frequency_custom_months: NotRequired[int]
    billing_type: NotRequired[PricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr]
    price_points: NotRequired[list[SimplePricePointDict]]
