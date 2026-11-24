from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.newsletter_list_status import NewsletterListStatusOrStr


class NewsletterListInfo(SdkBaseModel):
    id: str
    """The prefixed ID of the newsletter list."""

    name: str
    """The name of the newsletter list."""

    slug: str
    """The URL-friendly slug of the newsletter list."""

    description: Optional[str] = UNSET
    """A description of the newsletter list."""

    status: NewsletterListStatusOrStr
    """The status of the newsletter list."""

    auto_subscribe: bool
    """Whether new subscribers are automatically subscribed to this list."""

    subscriber_count: int
    """The number of active subscribers on this list."""

    created_at: int
    """The time the newsletter list was created. Measured in seconds since the Unix epoch."""

    updated_at: int
    """The time the newsletter list was last updated. Measured in seconds since the Unix epoch."""


class NewsletterListInfoDict(TypedDict):
    id: str
    name: str
    slug: str
    description: NotRequired[str]
    status: NewsletterListStatusOrStr
    auto_subscribe: bool
    subscriber_count: int
    created_at: int
    updated_at: int
