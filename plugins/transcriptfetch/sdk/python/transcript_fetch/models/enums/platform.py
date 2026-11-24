from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform(str, Enum):
    """Where the rows came from: the ``platform`` field on search, the platform detected from the URL on channel and
    playlist."""

    YOUTUBE = "youtube"
    TIKTOK = "tiktok"
    INSTAGRAM = "instagram"
    SPOTIFY = "spotify"
    APPLE = "apple"
    RSS = "rss"

    __str__ = str.__str__


PlatformOrStr: TypeAlias = Annotated[Platform | str, open_enum_validator(Platform)]
