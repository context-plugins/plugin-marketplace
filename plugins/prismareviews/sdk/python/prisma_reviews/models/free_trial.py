from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_prisma_reviews_usage_api import StatusPrismaReviewsUsageApiOrStr


class FreeTrial(SdkBaseModel):
    """One-off free reads (100 per account, never renewed) to try Google Maps and Tripadvisor with real data."""

    status: Optional[StatusPrismaReviewsUsageApiOrStr] = UNSET
    """``verify_email``: verify the account email first. ``not_applicable``: the workspace has paid reads of its own,
    used instead."""

    reads: Optional[int] = UNSET
    used: Optional[int] = UNSET
    left: Optional[int] = UNSET
    platforms: Optional[list[str]] = UNSET


class FreeTrialDict(TypedDict):
    status: NotRequired[StatusPrismaReviewsUsageApiOrStr]
    reads: NotRequired[int]
    used: NotRequired[int]
    left: NotRequired[int]
    platforms: NotRequired[list[str]]
