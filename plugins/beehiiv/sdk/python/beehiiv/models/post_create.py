from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostCreate(SdkBaseModel):
    id: str
    """The prefixed post id"""

    preview_url: Optional[str] = UNSET
    """A stable URL to the post's email preview in the beehiiv app. Renders the current post content on every visit.
    Requires a beehiiv session with access to the publication. The same URL is returned on every create, update, or
    show. Supports optional query parameters to preview as a specific audience: ``platform`` (``email`` default, or
    ``web``), ``subscriber_type`` (``free`` default, or ``premium`` - requires ``tier_ids[]``), ``tier_ids[]`` (one or
    more tier ids, only used when ``subscriber_type=premium``), and ``subscriber_id`` (renders using that subscriber's
    real tier memberships and takes precedence over ``subscriber_type``/``tier_ids[]``)."""


class PostCreateDict(TypedDict):
    id: str
    preview_url: NotRequired[str]
