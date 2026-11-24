from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Money(SdkBaseModel):
    amount: str
    """Decimal monetary amount at ISO 4217 minor-unit precision (string)."""

    currency: str
    """ISO 4217 currency code."""


class MoneyDict(TypedDict):
    amount: str
    currency: str
