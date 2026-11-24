from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlatformBundleSocialPostApi(str, Enum):
    TIKTOK = "TIKTOK"
    YOUTUBE = "YOUTUBE"
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"
    TWITTER = "TWITTER"
    THREADS = "THREADS"
    LINKEDIN = "LINKEDIN"
    PINTEREST = "PINTEREST"
    REDDIT = "REDDIT"
    MASTODON = "MASTODON"
    DISCORD = "DISCORD"
    SLACK = "SLACK"
    BLUESKY = "BLUESKY"
    GOOGLE_BUSINESS = "GOOGLE_BUSINESS"
    SNAPCHAT = "SNAPCHAT"

    __str__ = str.__str__


PlatformBundleSocialPostApiOrStr: TypeAlias = Annotated[
    PlatformBundleSocialPostApi | str, open_enum_validator(PlatformBundleSocialPostApi)
]
