from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_provider_costs import BillingExplainerProviderCosts, BillingExplainerProviderCostsDict
from .billing_explainer_summary import BillingExplainerSummary, BillingExplainerSummaryDict


class BillingExplainerPayer(SdkBaseModel):
    summary: BillingExplainerSummary
    service: dict[str, BillingExplainerProviderCosts]
    account: dict[str, BillingExplainerProviderCosts]
    payer_id: str = Field(alias="payerId")
    friendly_name: str = Field(alias="friendlyName")


class BillingExplainerPayerDict(TypedDict):
    summary: BillingExplainerSummaryDict
    service: dict[str, BillingExplainerProviderCostsDict]
    account: dict[str, BillingExplainerProviderCostsDict]
    payer_id: str
    friendly_name: str
