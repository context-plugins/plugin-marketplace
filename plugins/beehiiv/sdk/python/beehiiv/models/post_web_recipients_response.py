from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostWebRecipientsResponse(SdkBaseModel):
    tier_ids: Optional[list[str]] = UNSET
    """The tier IDs targeted for web. Values are ``"free"``, ``"premium"``, or a specific tier's prefixed ID."""

    include_segment_ids: Optional[list[str]] = UNSET
    exclude_segment_ids: Optional[list[str]] = UNSET


class PostWebRecipientsResponseDict(TypedDict):
    tier_ids: NotRequired[list[str]]
    include_segment_ids: NotRequired[list[str]]
    exclude_segment_ids: NotRequired[list[str]]
