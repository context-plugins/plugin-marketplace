from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .billing_explainer_money import BillingExplainerMoney, BillingExplainerMoneyDict


class BillingExplainerProviderCosts(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    doit: dict[str, BillingExplainerMoney]
    aws: dict[str, BillingExplainerMoney]


class BillingExplainerProviderCostsDict(TypedDict):
    doit: dict[str, BillingExplainerMoneyDict]
    aws: dict[str, BillingExplainerMoneyDict]
