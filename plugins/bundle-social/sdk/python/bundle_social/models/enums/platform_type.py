from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlatformType(str, Enum):
    TIKTOK = "TIKTOK"
    YOUTUBE = "YOUTUBE"
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"
    THREADS = "THREADS"
    REDDIT = "REDDIT"
    PINTEREST = "PINTEREST"
    MASTODON = "MASTODON"
    LINKEDIN = "LINKEDIN"
    BLUESKY = "BLUESKY"
    GOOGLE_BUSINESS = "GOOGLE_BUSINESS"
    SNAPCHAT = "SNAPCHAT"
    TWITTER = "TWITTER"

    __str__ = str.__str__


PlatformTypeOrStr: TypeAlias = Annotated[PlatformType | str, open_enum_validator(PlatformType)]
