from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CostOverride(SdkBaseModel):
    """If supplied, overrides server-side pricing. The usage breakdown is still recorded for analytics."""

    amount: float
    currency: str
    """ISO 4217 currency code, e.g. "USD"."""


class CostOverrideDict(TypedDict):
    amount: float
    currency: str
