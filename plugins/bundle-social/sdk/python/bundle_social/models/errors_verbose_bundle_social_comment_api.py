from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .bluesky1 import Bluesky1, Bluesky1Dict
from .discord1 import Discord1, Discord1Dict
from .facebook1 import Facebook1, Facebook1Dict
from .instagram1 import Instagram1, Instagram1Dict
from .linkedin1 import Linkedin1, Linkedin1Dict
from .mastodon1 import Mastodon1, Mastodon1Dict
from .reddit1 import Reddit1, Reddit1Dict
from .slack1 import Slack1, Slack1Dict
from .threads1 import Threads1, Threads1Dict
from .tiktok1 import Tiktok1, Tiktok1Dict
from .twitter1 import Twitter1, Twitter1Dict
from .youtube1 import Youtube1, Youtube1Dict


class ErrorsVerboseBundleSocialCommentApi(SdkBaseModel):
    twitter: OptionalNullable[Twitter1] = Field(default=UNSET, alias="TWITTER")
    facebook: OptionalNullable[Facebook1] = Field(default=UNSET, alias="FACEBOOK")
    instagram: OptionalNullable[Instagram1] = Field(default=UNSET, alias="INSTAGRAM")
    tiktok: OptionalNullable[Tiktok1] = Field(default=UNSET, alias="TIKTOK")
    linkedin: OptionalNullable[Linkedin1] = Field(default=UNSET, alias="LINKEDIN")
    reddit: OptionalNullable[Reddit1] = Field(default=UNSET, alias="REDDIT")
    youtube: OptionalNullable[Youtube1] = Field(default=UNSET, alias="YOUTUBE")
    mastodon: OptionalNullable[Mastodon1] = Field(default=UNSET, alias="MASTODON")
    threads: OptionalNullable[Threads1] = Field(default=UNSET, alias="THREADS")
    discord: OptionalNullable[Discord1] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[Slack1] = Field(default=UNSET, alias="SLACK")
    bluesky: OptionalNullable[Bluesky1] = Field(default=UNSET, alias="BLUESKY")


class ErrorsVerboseBundleSocialCommentApiDict(TypedDict):
    twitter: NotRequired[Twitter1Dict | None]
    facebook: NotRequired[Facebook1Dict | None]
    instagram: NotRequired[Instagram1Dict | None]
    tiktok: NotRequired[Tiktok1Dict | None]
    linkedin: NotRequired[Linkedin1Dict | None]
    reddit: NotRequired[Reddit1Dict | None]
    youtube: NotRequired[Youtube1Dict | None]
    mastodon: NotRequired[Mastodon1Dict | None]
    threads: NotRequired[Threads1Dict | None]
    discord: NotRequired[Discord1Dict | None]
    slack: NotRequired[Slack1Dict | None]
    bluesky: NotRequired[Bluesky1Dict | None]
