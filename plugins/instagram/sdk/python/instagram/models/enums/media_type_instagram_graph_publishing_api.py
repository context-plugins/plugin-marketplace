from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaTypeInstagramGraphPublishingApi(str, Enum):
    """Type of media to publish."""

    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    REELS = "REELS"
    STORIES = "STORIES"
    CAROUSEL = "CAROUSEL"

    __str__ = str.__str__


MediaTypeInstagramGraphPublishingApiOrStr: TypeAlias = Annotated[
    MediaTypeInstagramGraphPublishingApi | str, open_enum_validator(MediaTypeInstagramGraphPublishingApi)
]
