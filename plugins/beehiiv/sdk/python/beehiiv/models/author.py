from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .author_social_media_links import AuthorSocialMediaLinks, AuthorSocialMediaLinksDict
from .enums.author_type2 import AuthorType2OrStr


class Author(SdkBaseModel):
    id: str
    """The prefixed ID of the author (e.g. ``guest_xxx`` for guest authors, ``user_xxx`` for users)."""

    type_: AuthorType2OrStr = Field(alias="type")
    """The author type."""

    name: str
    """The author display name."""

    bio: Optional[str] = UNSET
    """The biography text for the author."""

    bio_image_url: Optional[str] = UNSET
    """The profile image URL for the author."""

    social_media_links: AuthorSocialMediaLinks


class AuthorDict(TypedDict):
    id: str
    type_: AuthorType2OrStr
    name: str
    bio: NotRequired[str]
    bio_image_url: NotRequired[str]
    social_media_links: AuthorSocialMediaLinksDict
