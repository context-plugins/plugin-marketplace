from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .bluesky2 import Bluesky2, Bluesky2Dict
from .discord2 import Discord2, Discord2Dict
from .facebook2 import Facebook2, Facebook2Dict
from .googlebusiness2 import Googlebusiness2, Googlebusiness2Dict
from .instagram2 import Instagram2, Instagram2Dict
from .linkedin2 import Linkedin2, Linkedin2Dict
from .mastodon2 import Mastodon2, Mastodon2Dict
from .pinterest2 import Pinterest2, Pinterest2Dict
from .reddit2 import Reddit2, Reddit2Dict
from .slack2 import Slack2, Slack2Dict
from .snapchat2 import Snapchat2, Snapchat2Dict
from .threads2 import Threads2, Threads2Dict
from .tiktok2 import Tiktok2, Tiktok2Dict
from .twitter2 import Twitter2, Twitter2Dict
from .youtube2 import Youtube2, Youtube2Dict


class ExternalData(SdkBaseModel):
    twitter: OptionalNullable[Twitter2] = Field(default=UNSET, alias="TWITTER")
    pinterest: OptionalNullable[Pinterest2] = Field(default=UNSET, alias="PINTEREST")
    facebook: OptionalNullable[Facebook2] = Field(default=UNSET, alias="FACEBOOK")
    instagram: OptionalNullable[Instagram2] = Field(default=UNSET, alias="INSTAGRAM")
    tiktok: OptionalNullable[Tiktok2] = Field(default=UNSET, alias="TIKTOK")
    linkedin: OptionalNullable[Linkedin2] = Field(default=UNSET, alias="LINKEDIN")
    reddit: OptionalNullable[Reddit2] = Field(default=UNSET, alias="REDDIT")
    discord: OptionalNullable[Discord2] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[Slack2] = Field(default=UNSET, alias="SLACK")
    youtube: OptionalNullable[Youtube2] = Field(default=UNSET, alias="YOUTUBE")
    mastodon: OptionalNullable[Mastodon2] = Field(default=UNSET, alias="MASTODON")
    threads: OptionalNullable[Threads2] = Field(default=UNSET, alias="THREADS")
    bluesky: OptionalNullable[Bluesky2] = Field(default=UNSET, alias="BLUESKY")
    google_business: OptionalNullable[Googlebusiness2] = Field(default=UNSET, alias="GOOGLE_BUSINESS")
    snapchat: OptionalNullable[Snapchat2] = Field(default=UNSET, alias="SNAPCHAT")


class ExternalDataDict(TypedDict):
    twitter: NotRequired[Twitter2Dict | None]
    pinterest: NotRequired[Pinterest2Dict | None]
    facebook: NotRequired[Facebook2Dict | None]
    instagram: NotRequired[Instagram2Dict | None]
    tiktok: NotRequired[Tiktok2Dict | None]
    linkedin: NotRequired[Linkedin2Dict | None]
    reddit: NotRequired[Reddit2Dict | None]
    discord: NotRequired[Discord2Dict | None]
    slack: NotRequired[Slack2Dict | None]
    youtube: NotRequired[Youtube2Dict | None]
    mastodon: NotRequired[Mastodon2Dict | None]
    threads: NotRequired[Threads2Dict | None]
    bluesky: NotRequired[Bluesky2Dict | None]
    google_business: NotRequired[Googlebusiness2Dict | None]
    snapchat: NotRequired[Snapchat2Dict | None]
