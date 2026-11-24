from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_money import BillingExplainerMoney, BillingExplainerMoneyDict


class BillingExplainerCostLineItem(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    cost_type: str = Field(alias="costType")
    cost: BillingExplainerMoney
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""


class BillingExplainerCostLineItemDict(TypedDict):
    cost_type: str
    cost: BillingExplainerMoneyDict
