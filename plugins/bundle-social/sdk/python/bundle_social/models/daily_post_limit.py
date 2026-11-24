from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DailyPostLimit(SdkBaseModel):
    twitter: Optional[float] = Field(default=UNSET, alias="TWITTER")
    facebook: Optional[float] = Field(default=UNSET, alias="FACEBOOK")
    instagram: Optional[float] = Field(default=UNSET, alias="INSTAGRAM")
    linkedin: Optional[float] = Field(default=UNSET, alias="LINKEDIN")
    youtube: Optional[float] = Field(default=UNSET, alias="YOUTUBE")
    tiktok: Optional[float] = Field(default=UNSET, alias="TIKTOK")
    threads: Optional[float] = Field(default=UNSET, alias="THREADS")
    pinterest: Optional[float] = Field(default=UNSET, alias="PINTEREST")
    reddit: Optional[float] = Field(default=UNSET, alias="REDDIT")
    discord: Optional[float] = Field(default=UNSET, alias="DISCORD")
    slack: Optional[float] = Field(default=UNSET, alias="SLACK")
    mastodon: Optional[float] = Field(default=UNSET, alias="MASTODON")
    bluesky: Optional[float] = Field(default=UNSET, alias="BLUESKY")
    google_business: Optional[float] = Field(default=UNSET, alias="GOOGLE_BUSINESS")
    snapchat: Optional[float] = Field(default=UNSET, alias="SNAPCHAT")


class DailyPostLimitDict(TypedDict):
    twitter: NotRequired[float]
    facebook: NotRequired[float]
    instagram: NotRequired[float]
    linkedin: NotRequired[float]
    youtube: NotRequired[float]
    tiktok: NotRequired[float]
    threads: NotRequired[float]
    pinterest: NotRequired[float]
    reddit: NotRequired[float]
    discord: NotRequired[float]
    slack: NotRequired[float]
    mastodon: NotRequired[float]
    bluesky: NotRequired[float]
    google_business: NotRequired[float]
    snapchat: NotRequired[float]
