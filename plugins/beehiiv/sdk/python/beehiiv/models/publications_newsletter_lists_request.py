from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicationsNewsletterListsRequest(SdkBaseModel):
    name: str
    """The name of the newsletter list."""

    description: Optional[str] = UNSET
    """A description of the newsletter list."""

    slug: Optional[str] = UNSET
    """A unique slug for the newsletter list. Auto-generated from the name if not provided."""

    auto_subscribe: Optional[bool] = UNSET
    """Whether new subscribers are automatically subscribed to this list."""


class PublicationsNewsletterListsRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    slug: NotRequired[str]
    auto_subscribe: NotRequired[bool]
