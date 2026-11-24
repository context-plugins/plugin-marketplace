from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .product_credit_benefit_output import ProductCreditBenefitOutput, ProductCreditBenefitOutputDict
from .product_pricing_output import ProductPricingOutput, ProductPricingOutputDict


class ProductAttributeOutput(SdkBaseModel):
    product_attribute_id: str = Field(alias="productAttributeId")
    name: str
    active: bool
    pricing: ProductPricingOutput
    credit_benefits: list[ProductCreditBenefitOutput] = Field(alias="creditBenefits")


class ProductAttributeOutputDict(TypedDict):
    product_attribute_id: str
    name: str
    active: bool
    pricing: ProductPricingOutputDict
    credit_benefits: list[ProductCreditBenefitOutputDict]
