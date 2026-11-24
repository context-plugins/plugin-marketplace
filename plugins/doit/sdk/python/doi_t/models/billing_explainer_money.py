from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BillingExplainerMoney(SdkBaseModel):
    """Monetary value represented as a decimal string and an ISO 4217 currency code."""

    model_config = ConfigDict(extra="forbid")

    amount: str
    """Decimal amount serialized at the currency's minor-unit precision."""

    currency: str
    """ISO 4217 three-letter uppercase currency code."""


class BillingExplainerMoneyDict(TypedDict):
    amount: str
    currency: str
