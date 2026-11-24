from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .free_trial import FreeTrial, FreeTrialDict


class PaidReads(SdkBaseModel):
    used: int
    """Reads used this month by platforms read through paid data providers (Yelp, Tripadvisor, Booking.com…) on live
    connections."""

    limit: int
    """Reads included this month: the plan's plus read packs."""

    free_trial: Optional[FreeTrial] = UNSET
    """One-off free reads (100 per account, never renewed) to try Google Maps and Tripadvisor with real data."""


class PaidReadsDict(TypedDict):
    used: int
    limit: int
    free_trial: NotRequired[FreeTrialDict]
