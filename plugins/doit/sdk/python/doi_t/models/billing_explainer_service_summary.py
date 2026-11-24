from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_cost_line_item import BillingExplainerCostLineItem, BillingExplainerCostLineItemDict
from .billing_explainer_money import BillingExplainerMoney, BillingExplainerMoneyDict
from .billing_explainer_support_charges import BillingExplainerSupportCharges, BillingExplainerSupportChargesDict


class BillingExplainerServiceSummary(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    service_charges: list[BillingExplainerCostLineItem] = Field(alias="serviceCharges")
    marketplace_charges: list[BillingExplainerCostLineItem] = Field(alias="marketplaceCharges")
    discounts: list[BillingExplainerCostLineItem]
    tax: list[BillingExplainerCostLineItem]
    support_charges: BillingExplainerSupportCharges = Field(alias="supportCharges")
    credits: list[BillingExplainerCostLineItem]
    savings: list[BillingExplainerCostLineItem]
    other_charges: list[BillingExplainerCostLineItem] = Field(alias="otherCharges")
    refunds: list[BillingExplainerCostLineItem]
    total: BillingExplainerMoney
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""


class BillingExplainerServiceSummaryDict(TypedDict):
    service_charges: list[BillingExplainerCostLineItemDict]
    marketplace_charges: list[BillingExplainerCostLineItemDict]
    discounts: list[BillingExplainerCostLineItemDict]
    tax: list[BillingExplainerCostLineItemDict]
    support_charges: BillingExplainerSupportChargesDict
    credits: list[BillingExplainerCostLineItemDict]
    savings: list[BillingExplainerCostLineItemDict]
    other_charges: list[BillingExplainerCostLineItemDict]
    refunds: list[BillingExplainerCostLineItemDict]
    total: BillingExplainerMoneyDict
