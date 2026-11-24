from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform2 import Platform2OrStr
from .fees1 import Fees1, Fees1Dict


class Offer(SdkBaseModel):
    ota: str
    """The seller. Google mode: the OTA name Google reported. Direct mode: the platform you supplied."""

    total_price: float = Field(alias="totalPrice")
    currency: str
    url: str
    platform: Optional[Platform2OrStr] = UNSET
    """DIRECT MODE ONLY. The platform this leg was priced on."""

    listing_id: Optional[str] = Field(default=UNSET, alias="listingId")
    """DIRECT MODE ONLY. The platform-native listing id you supplied for this leg."""

    nightly_price: Optional[float] = Field(default=UNSET, alias="nightlyPrice")
    """DIRECT MODE ONLY. Per-night price for the requested stay."""

    fees: Optional[Fees1] = UNSET
    """DIRECT MODE ONLY, and BEST-EFFORT: fee coverage differs per platform. Airbnb reports cleaning, service and taxes;
    Booking.com reports taxes only; Vrbo and Google report none (all null). Compare on totalPrice — it is present and
    comparable on every platform. Never assume a null fee means the platform does not charge it; it means we could not
    read it."""

    nights: Optional[int] = UNSET
    """DIRECT MODE ONLY. Nights priced."""


class OfferDict(TypedDict):
    ota: str
    total_price: float
    currency: str
    url: str
    platform: NotRequired[Platform2OrStr]
    listing_id: NotRequired[str]
    nightly_price: NotRequired[float]
    fees: NotRequired[Fees1Dict]
    nights: NotRequired[int]
