from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SocialAccountTypeBundleSocialOrganizationApi(str, Enum):
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


SocialAccountTypeBundleSocialOrganizationApiOrStr: TypeAlias = Annotated[
    SocialAccountTypeBundleSocialOrganizationApi | str,
    open_enum_validator(SocialAccountTypeBundleSocialOrganizationApi),
]
