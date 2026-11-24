from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform1(str, Enum):
    """Where to search: youtube (default), tiktok, instagram, spotify, apple, or rss. Every result's url is accepted by
    the transcript and batch endpoints as-is. rss searches the open podcast index via Apple's directory and returns
    episode audio (enclosure) URLs."""

    YOUTUBE = "youtube"
    TIKTOK = "tiktok"
    INSTAGRAM = "instagram"
    SPOTIFY = "spotify"
    APPLE = "apple"
    RSS = "rss"

    __str__ = str.__str__


Platform1OrStr: TypeAlias = Annotated[Platform1 | str, open_enum_validator(Platform1)]
