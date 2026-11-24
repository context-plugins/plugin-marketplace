from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlatformBundleSocialCommentApi(str, Enum):
    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"
    LINKEDIN = "LINKEDIN"
    YOUTUBE = "YOUTUBE"
    TIKTOK = "TIKTOK"
    REDDIT = "REDDIT"
    THREADS = "THREADS"
    MASTODON = "MASTODON"
    BLUESKY = "BLUESKY"
    TWITTER = "TWITTER"

    __str__ = str.__str__


PlatformBundleSocialCommentApiOrStr: TypeAlias = Annotated[
    PlatformBundleSocialCommentApi | str, open_enum_validator(PlatformBundleSocialCommentApi)
]
