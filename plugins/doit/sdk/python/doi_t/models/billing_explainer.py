from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_provider_costs import BillingExplainerProviderCosts, BillingExplainerProviderCostsDict
from .billing_explainer_summary import BillingExplainerSummary, BillingExplainerSummaryDict


class BillingExplainer(SdkBaseModel):
    summary: BillingExplainerSummary
    service: dict[str, BillingExplainerProviderCosts]
    account: dict[str, BillingExplainerProviderCosts]


class BillingExplainerDict(TypedDict):
    summary: BillingExplainerSummaryDict
    service: dict[str, BillingExplainerProviderCostsDict]
    account: dict[str, BillingExplainerProviderCostsDict]
