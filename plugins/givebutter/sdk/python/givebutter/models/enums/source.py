from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    UPLOAD = "upload"
    YOUTUBE = "youtube"
    VIMEO = "vimeo"
    TWITCH = "twitch"
    FACEBOOK = "facebook"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]
