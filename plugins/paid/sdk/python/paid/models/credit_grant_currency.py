from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreditGrantCurrency(SdkBaseModel):
    key: str
    """Stable machine-readable key for this credit currency."""

    name: str
    """Human-readable name for this credit currency."""


class CreditGrantCurrencyDict(TypedDict):
    key: str
    name: str
