from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .bluesky import Bluesky, BlueskyDict
from .discord import Discord, DiscordDict
from .facebook import Facebook, FacebookDict
from .googlebusiness import Googlebusiness, GooglebusinessDict
from .instagram import Instagram, InstagramDict
from .linkedin import Linkedin, LinkedinDict
from .mastodon import Mastodon, MastodonDict
from .pinterest import Pinterest, PinterestDict
from .reddit import Reddit, RedditDict
from .slack import Slack, SlackDict
from .snapchat import Snapchat, SnapchatDict
from .threads import Threads, ThreadsDict
from .tiktok import Tiktok, TiktokDict
from .twitter import Twitter, TwitterDict
from .youtube import Youtube, YoutubeDict


class Data(SdkBaseModel):
    twitter: OptionalNullable[Twitter] = Field(default=UNSET, alias="TWITTER")
    pinterest: OptionalNullable[Pinterest] = Field(default=UNSET, alias="PINTEREST")
    facebook: OptionalNullable[Facebook] = Field(default=UNSET, alias="FACEBOOK")
    instagram: OptionalNullable[Instagram] = Field(default=UNSET, alias="INSTAGRAM")
    threads: OptionalNullable[Threads] = Field(default=UNSET, alias="THREADS")
    tiktok: OptionalNullable[Tiktok] = Field(default=UNSET, alias="TIKTOK")
    linkedin: OptionalNullable[Linkedin] = Field(default=UNSET, alias="LINKEDIN")
    youtube: OptionalNullable[Youtube] = Field(default=UNSET, alias="YOUTUBE")
    reddit: OptionalNullable[Reddit] = Field(default=UNSET, alias="REDDIT")
    discord: OptionalNullable[Discord] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[Slack] = Field(default=UNSET, alias="SLACK")
    mastodon: OptionalNullable[Mastodon] = Field(default=UNSET, alias="MASTODON")
    bluesky: OptionalNullable[Bluesky] = Field(default=UNSET, alias="BLUESKY")
    google_business: OptionalNullable[Googlebusiness] = Field(default=UNSET, alias="GOOGLE_BUSINESS")
    snapchat: OptionalNullable[Snapchat] = Field(default=UNSET, alias="SNAPCHAT")


class DataDict(TypedDict):
    twitter: NotRequired[TwitterDict | None]
    pinterest: NotRequired[PinterestDict | None]
    facebook: NotRequired[FacebookDict | None]
    instagram: NotRequired[InstagramDict | None]
    threads: NotRequired[ThreadsDict | None]
    tiktok: NotRequired[TiktokDict | None]
    linkedin: NotRequired[LinkedinDict | None]
    youtube: NotRequired[YoutubeDict | None]
    reddit: NotRequired[RedditDict | None]
    discord: NotRequired[DiscordDict | None]
    slack: NotRequired[SlackDict | None]
    mastodon: NotRequired[MastodonDict | None]
    bluesky: NotRequired[BlueskyDict | None]
    google_business: NotRequired[GooglebusinessDict | None]
    snapchat: NotRequired[SnapchatDict | None]
