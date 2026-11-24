from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class User(SdkBaseModel):
    id: Optional[str] = UNSET
    """App-scoped user ID."""

    username: Optional[str] = UNSET
    """Instagram username."""

    name: Optional[str] = UNSET
    """Profile name."""

    biography: Optional[str] = UNSET
    """Profile bio text."""

    website: Optional[str] = UNSET
    """Website URL from profile."""

    profile_picture_url: Optional[str] = UNSET
    """Profile picture URL."""

    followers_count: Optional[int] = UNSET
    """Total followers."""

    follows_count: Optional[int] = UNSET
    """Total accounts followed."""

    media_count: Optional[int] = UNSET
    """Total published media."""


class UserDict(TypedDict):
    id: NotRequired[str]
    username: NotRequired[str]
    name: NotRequired[str]
    biography: NotRequired[str]
    website: NotRequired[str]
    profile_picture_url: NotRequired[str]
    followers_count: NotRequired[int]
    follows_count: NotRequired[int]
    media_count: NotRequired[int]
