from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_money import BillingExplainerMoney, BillingExplainerMoneyDict
from .billing_explainer_support_detail import BillingExplainerSupportDetail, BillingExplainerSupportDetailDict


class BillingExplainerSupportCharges(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    cost: BillingExplainerMoney
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""

    details: list[BillingExplainerSupportDetail]


class BillingExplainerSupportChargesDict(TypedDict):
    cost: BillingExplainerMoneyDict
    details: list[BillingExplainerSupportDetailDict]
