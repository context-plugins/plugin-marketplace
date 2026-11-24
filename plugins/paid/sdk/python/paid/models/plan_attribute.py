from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .plan_credit_benefit import PlanCreditBenefit, PlanCreditBenefitDict
from .plan_pricing1 import PlanPricing1, PlanPricing1Dict


class PlanAttribute(SdkBaseModel):
    product_attribute_id: str = Field(alias="productAttributeId")
    name: str
    active: bool
    pricing: PlanPricing1
    """Pricing configuration for a plan attribute. Money amounts are expressed in cents."""

    credit_benefits: list[PlanCreditBenefit] = Field(alias="creditBenefits")


class PlanAttributeDict(TypedDict):
    product_attribute_id: str
    name: str
    active: bool
    pricing: PlanPricing1Dict
    credit_benefits: list[PlanCreditBenefitDict]
