from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostEmailRecipients1(SdkBaseModel):
    """Email audience targeting. Omit this key to create no email targets."""

    tier_ids: Optional[list[str]] = UNSET
    """The tier IDs to target. Accepts specific tier UUIDs or the special values ``"free"``, ``"premium"``, or
    ``"all"``. When ``"all"`` is provided, targets all subscriber tiers — free subscribers, and premium subscribers if
    the publication has an active paid tier. Cannot be combined with ``include_segment_ids``."""

    include_segment_ids: Optional[list[str]] = UNSET
    """Cannot be combined with ``tier_ids``."""

    exclude_segment_ids: Optional[list[str]] = UNSET


class PostEmailRecipients1Dict(TypedDict):
    tier_ids: NotRequired[list[str]]
    include_segment_ids: NotRequired[list[str]]
    exclude_segment_ids: NotRequired[list[str]]
