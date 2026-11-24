from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product_credit_benefit_input import ProductCreditBenefitInput, ProductCreditBenefitInputDict
from .unions.product_pricing_input15 import ProductPricingInput15, ProductPricingInput15Dict


class PlanAttributeInput(SdkBaseModel):
    product_attribute_id: str = Field(alias="productAttributeId")
    """Product attribute ID to override in this plan"""

    pricing: ProductPricingInput15
    credit_benefits: Optional[list[ProductCreditBenefitInput]] = Field(default=UNSET, alias="creditBenefits")


class PlanAttributeInputDict(TypedDict):
    product_attribute_id: str
    pricing: ProductPricingInput15Dict
    credit_benefits: NotRequired[list[ProductCreditBenefitInputDict]]
