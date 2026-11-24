from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type6(str, Enum):
    """The type of the technical cue."""

    COLOR_BARS = "ColorBars"
    END_CREDITS = "EndCredits"
    BLACK_FRAMES = "BlackFrames"
    OPENING_CREDITS = "OpeningCredits"
    STUDIO_LOGO = "StudioLogo"
    SLATE = "Slate"
    CONTENT = "Content"

    __str__ = str.__str__


Type6OrStr: TypeAlias = Annotated[Type6 | str, open_enum_validator(Type6)]
