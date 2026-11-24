from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_provider_costs import BillingExplainerProviderCosts, BillingExplainerProviderCostsDict
from .billing_explainer_summary import BillingExplainerSummary, BillingExplainerSummaryDict


class EntityInvoiceExplainer(SdkBaseModel):
    summary: BillingExplainerSummary
    service: dict[str, BillingExplainerProviderCosts]
    account: dict[str, BillingExplainerProviderCosts]
    customer_id: str = Field(alias="customerId")
    billing_profile_id: str = Field(alias="billingProfileId")
    invoice_number: str = Field(alias="invoiceNumber")
    invoice_month: str = Field(alias="invoiceMonth")


class EntityInvoiceExplainerDict(TypedDict):
    summary: BillingExplainerSummaryDict
    service: dict[str, BillingExplainerProviderCostsDict]
    account: dict[str, BillingExplainerProviderCostsDict]
    customer_id: str
    billing_profile_id: str
    invoice_number: str
    invoice_month: str
