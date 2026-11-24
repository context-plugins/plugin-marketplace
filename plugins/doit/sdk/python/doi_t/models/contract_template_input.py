from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .contract_template_billing_rule import ContractTemplateBillingRule, ContractTemplateBillingRuleDict
from .contract_template_price_book import ContractTemplatePriceBook, ContractTemplatePriceBookDict


class ContractTemplateInput(SdkBaseModel):
    """Payload for creating or updating a contract template."""

    name: str
    platform: str
    structure: Optional[str] = UNSET
    """Which preset the template started from. Optional — an omitted or blank value is recorded as "blank"."""

    eligible_from: RFC3339DateTime = Field(alias="eligibleFrom")
    eligible_to: Optional[RFC3339DateTime] = Field(default=UNSET, alias="eligibleTo")
    billing_rules: Optional[list[ContractTemplateBillingRule]] = Field(default=UNSET, alias="billingRules")
    price_books: Optional[list[ContractTemplatePriceBook]] = Field(default=UNSET, alias="priceBooks")
    custom_line_items: Optional[list[Any]] = Field(default=UNSET, alias="customLineItems")


class ContractTemplateInputDict(TypedDict):
    name: str
    platform: str
    structure: NotRequired[str]
    eligible_from: RFC3339DateTime
    eligible_to: NotRequired[RFC3339DateTime]
    billing_rules: NotRequired[list[ContractTemplateBillingRuleDict]]
    price_books: NotRequired[list[ContractTemplatePriceBookDict]]
    custom_line_items: NotRequired[list[Any]]
