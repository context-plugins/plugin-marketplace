from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .credit_benefit_input import CreditBenefitInput, CreditBenefitInputDict
from .unions.pricing_input15 import PricingInput15, PricingInput15Dict


class UpdatePricingRequest(SdkBaseModel):
    pricing: PricingInput15
    credit_benefits: Optional[list[CreditBenefitInput]] = Field(default=UNSET, alias="creditBenefits")


class UpdatePricingRequestDict(TypedDict):
    pricing: PricingInput15Dict
    credit_benefits: NotRequired[list[CreditBenefitInputDict]]
