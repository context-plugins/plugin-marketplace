from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tier_price_currency import TierPriceCurrencyOrStr
from .enums.tier_price_interval import TierPriceIntervalOrStr


class TierPricesAttributesItem(SdkBaseModel):
    currency: TierPriceCurrencyOrStr
    amount_cents: int
    enabled: bool = True
    interval: TierPriceIntervalOrStr
    interval_display: Optional[str] = UNSET
    cta: Optional[str] = UNSET
    features: Optional[list[str]] = UNSET


class TierPricesAttributesItemDict(TypedDict):
    currency: TierPriceCurrencyOrStr
    amount_cents: int
    enabled: NotRequired[bool]
    interval: TierPriceIntervalOrStr
    interval_display: NotRequired[str]
    cta: NotRequired[str]
    features: NotRequired[list[str]]
