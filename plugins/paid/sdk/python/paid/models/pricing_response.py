from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .credit_benefit_output import CreditBenefitOutput, CreditBenefitOutputDict
from .pricing_output import PricingOutput, PricingOutputDict


class PricingResponse(SdkBaseModel):
    product_attribute_id: str = Field(alias="productAttributeId")
    name: str
    pricing: PricingOutput
    credit_benefits: list[CreditBenefitOutput] = Field(alias="creditBenefits")


class PricingResponseDict(TypedDict):
    product_attribute_id: str
    name: str
    pricing: PricingOutputDict
    credit_benefits: list[CreditBenefitOutputDict]
