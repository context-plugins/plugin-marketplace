from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RssThumbnailPosition(str, Enum):
    """The position of the thumbnail."""

    ABOVE_TITLE = "Above Title"
    BELOW_TITLE = "Below Title"
    LEFT_OF_CONTENT = "Left of content"
    RIGHT_OF_CONTENT = "Right of content"
    ALTERNATING_HORIZONTALLY = "Alternating Horizontally"

    __str__ = str.__str__


RssThumbnailPositionOrStr: TypeAlias = Annotated[RssThumbnailPosition | str, open_enum_validator(RssThumbnailPosition)]
