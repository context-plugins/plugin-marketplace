from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform6(str, Enum):
    TIKTOK = "TIKTOK"
    YOUTUBE = "YOUTUBE"
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"
    TWITTER = "TWITTER"
    THREADS = "THREADS"
    LINKEDIN = "LINKEDIN"
    REDDIT = "REDDIT"
    MASTODON = "MASTODON"
    DISCORD = "DISCORD"
    SLACK = "SLACK"
    BLUESKY = "BLUESKY"

    __str__ = str.__str__


Platform6OrStr: TypeAlias = Annotated[Platform6 | str, open_enum_validator(Platform6)]
