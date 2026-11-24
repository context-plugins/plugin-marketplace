from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RssCtaAlignment(str, Enum):
    """The alignment of the call to action."""

    LEFT = "Left"
    CENTER = "Center"
    RIGHT = "Right"

    __str__ = str.__str__


RssCtaAlignmentOrStr: TypeAlias = Annotated[RssCtaAlignment | str, open_enum_validator(RssCtaAlignment)]
