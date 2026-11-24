from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SocialAccountTypeBundleSocialPostImportApi(str, Enum):
    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"
    THREADS = "THREADS"
    TIKTOK = "TIKTOK"
    YOUTUBE = "YOUTUBE"
    LINKEDIN = "LINKEDIN"
    PINTEREST = "PINTEREST"
    REDDIT = "REDDIT"
    MASTODON = "MASTODON"
    BLUESKY = "BLUESKY"
    TWITTER = "TWITTER"

    __str__ = str.__str__


SocialAccountTypeBundleSocialPostImportApiOrStr: TypeAlias = Annotated[
    SocialAccountTypeBundleSocialPostImportApi | str, open_enum_validator(SocialAccountTypeBundleSocialPostImportApi)
]
