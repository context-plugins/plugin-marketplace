from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AuthorSocialMediaLinks(SdkBaseModel):
    twitter_handle: Optional[str] = UNSET
    facebook_url: Optional[str] = UNSET
    instagram_url: Optional[str] = UNSET
    linkedin_url: Optional[str] = UNSET
    youtube_url: Optional[str] = UNSET
    tiktok_url: Optional[str] = UNSET
    discord_url: Optional[str] = UNSET
    bluesky_url: Optional[str] = UNSET
    rss_url: Optional[str] = UNSET


class AuthorSocialMediaLinksDict(TypedDict):
    twitter_handle: NotRequired[str]
    facebook_url: NotRequired[str]
    instagram_url: NotRequired[str]
    linkedin_url: NotRequired[str]
    youtube_url: NotRequired[str]
    tiktok_url: NotRequired[str]
    discord_url: NotRequired[str]
    bluesky_url: NotRequired[str]
    rss_url: NotRequired[str]
