from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tier_price_currency import TierPriceCurrencyOrStr
from .enums.tier_price_interval import TierPriceIntervalOrStr


class TierPrice(SdkBaseModel):
    """Price belonging to a Tier"""

    id: Optional[str] = UNSET
    """The prefixed ID of the price."""

    currency: Optional[TierPriceCurrencyOrStr] = UNSET
    amount_cents: Optional[int] = UNSET
    enabled: bool = True
    interval: Optional[TierPriceIntervalOrStr] = UNSET
    denominator: Optional[str] = UNSET
    cta: Optional[str] = UNSET
    """When using the external Stripe checkout, this text will be displayed on the button"""

    features: Optional[list[str]] = UNSET


class TierPriceDict(TypedDict):
    id: NotRequired[str]
    currency: NotRequired[TierPriceCurrencyOrStr]
    amount_cents: NotRequired[int]
    enabled: NotRequired[bool]
    interval: NotRequired[TierPriceIntervalOrStr]
    denominator: NotRequired[str]
    cta: NotRequired[str]
    features: NotRequired[list[str]]
