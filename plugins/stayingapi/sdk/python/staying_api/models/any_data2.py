from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.source import SourceOrStr
from .offer import Offer, OfferDict


class AnyData2(SdkBaseModel):
    """Endpoint-specific data payload."""

    property: str
    check_in: str = Field(alias="checkIn")
    check_out: str = Field(alias="checkOut")
    currency: str
    min: float
    """Cheapest offer IN ``currency``. Offers quoted in another currency are excluded — they are not comparable."""

    median: float
    """Median offer IN ``currency``, same exclusion as ``min``."""

    offers: list[Offer]
    source: Optional[SourceOrStr] = UNSET
    """How the comparison was produced. Absent = google-aggregator (one Google Hotels leg). 'direct_fanout' = one real
    price call per listing id you supplied."""


class AnyData2Dict(TypedDict):
    property: str
    check_in: str
    check_out: str
    currency: str
    min: float
    median: float
    offers: list[OfferDict]
    source: NotRequired[SourceOrStr]
