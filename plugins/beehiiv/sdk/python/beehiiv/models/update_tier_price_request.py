from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tier_price_currency import TierPriceCurrencyOrStr
from .enums.tier_price_interval import TierPriceIntervalOrStr


class UpdateTierPriceRequest(SdkBaseModel):
    id: str
    """ID of the existing price."""

    currency: TierPriceCurrencyOrStr
    amount_cents: int
    interval: TierPriceIntervalOrStr
    interval_display: Optional[str] = UNSET
    cta: Optional[str] = UNSET
    features: Optional[list[str]] = UNSET
    delete: bool = False
    """Optionally delete the price when updating the tier."""


class UpdateTierPriceRequestDict(TypedDict):
    id: str
    currency: TierPriceCurrencyOrStr
    amount_cents: int
    interval: TierPriceIntervalOrStr
    interval_display: NotRequired[str]
    cta: NotRequired[str]
    features: NotRequired[list[str]]
    delete: NotRequired[bool]
