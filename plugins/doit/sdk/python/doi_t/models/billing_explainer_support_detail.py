from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_money import BillingExplainerMoney, BillingExplainerMoneyDict


class BillingExplainerSupportDetail(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    project_id: str = Field(alias="projectId")
    service_description: str = Field(alias="serviceDescription")
    description: str
    cost: BillingExplainerMoney
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""

    base_cost: BillingExplainerMoney = Field(alias="baseCost")
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""


class BillingExplainerSupportDetailDict(TypedDict):
    project_id: str
    service_description: str
    description: str
    cost: BillingExplainerMoneyDict
    base_cost: BillingExplainerMoneyDict
