from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.newsletter_list_writable_status1 import NewsletterListWritableStatus1OrStr


class PublicationsNewsletterListsRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the newsletter list."""

    description: Optional[str] = UNSET
    """A description of the newsletter list."""

    slug: Optional[str] = UNSET
    """A unique slug for the newsletter list."""

    auto_subscribe: Optional[bool] = UNSET
    """Whether new subscribers are automatically subscribed to this list."""

    status: Optional[NewsletterListWritableStatus1OrStr] = UNSET
    """The status of the newsletter list. Valid values are ``active`` and ``archived``. Setting ``draft`` is not
    permitted."""


class PublicationsNewsletterListsRequest1Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    slug: NotRequired[str]
    auto_subscribe: NotRequired[bool]
    status: NotRequired[NewsletterListWritableStatus1OrStr]
