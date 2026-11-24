from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product_credit_benefit_input import ProductCreditBenefitInput, ProductCreditBenefitInputDict
from .unions.product_pricing_input15 import ProductPricingInput15, ProductPricingInput15Dict


class ProductAttributeUpsert(SdkBaseModel):
    product_attribute_id: Optional[UUID] = Field(default=UNSET, alias="productAttributeId")
    name: str
    active: Optional[bool] = UNSET
    pricing: ProductPricingInput15
    credit_benefits: Optional[list[ProductCreditBenefitInput]] = Field(default=UNSET, alias="creditBenefits")


class ProductAttributeUpsertDict(TypedDict):
    product_attribute_id: NotRequired[UUID]
    name: str
    active: NotRequired[bool]
    pricing: ProductPricingInput15Dict
    credit_benefits: NotRequired[list[ProductCreditBenefitInputDict]]
