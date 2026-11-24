from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .contract_template_billing_rule import ContractTemplateBillingRule, ContractTemplateBillingRuleDict
from .contract_template_price_book import ContractTemplatePriceBook, ContractTemplatePriceBookDict
from .enums.status_doi_t_contract_templates_api import StatusDoiTContractTemplatesApiOrStr


class ContractTemplateResponse(SdkBaseModel):
    """Contract template returned by the PartnerOps external API."""

    template_id: Optional[str] = Field(default=UNSET, alias="templateId")
    name: Optional[str] = UNSET
    platform: Optional[str] = UNSET
    status: Optional[StatusDoiTContractTemplatesApiOrStr] = UNSET
    structure: Optional[str] = UNSET
    eligible_from: Optional[RFC3339DateTime] = Field(default=UNSET, alias="eligibleFrom")
    eligible_to: Optional[RFC3339DateTime] = Field(default=UNSET, alias="eligibleTo")
    billing_rules: Optional[list[ContractTemplateBillingRule]] = Field(default=UNSET, alias="billingRules")
    price_books: Optional[list[ContractTemplatePriceBook]] = Field(default=UNSET, alias="priceBooks")
    custom_line_items: Optional[list[Any]] = Field(default=UNSET, alias="customLineItems")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    archived_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="archivedAt")


class ContractTemplateResponseDict(TypedDict):
    template_id: NotRequired[str]
    name: NotRequired[str]
    platform: NotRequired[str]
    status: NotRequired[StatusDoiTContractTemplatesApiOrStr]
    structure: NotRequired[str]
    eligible_from: NotRequired[RFC3339DateTime]
    eligible_to: NotRequired[RFC3339DateTime]
    billing_rules: NotRequired[list[ContractTemplateBillingRuleDict]]
    price_books: NotRequired[list[ContractTemplatePriceBookDict]]
    custom_line_items: NotRequired[list[Any]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    archived_at: NotRequired[RFC3339DateTime]
