from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostEmailRecipientsResponse(SdkBaseModel):
    tier_ids: Optional[list[str]] = UNSET
    """The tier IDs targeted for email. Values are ``"free"``, ``"premium"``, or a specific tier's prefixed ID."""

    include_segment_ids: Optional[list[str]] = UNSET
    exclude_segment_ids: Optional[list[str]] = UNSET


class PostEmailRecipientsResponseDict(TypedDict):
    tier_ids: NotRequired[list[str]]
    include_segment_ids: NotRequired[list[str]]
    exclude_segment_ids: NotRequired[list[str]]
