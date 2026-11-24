from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Family1(str, Enum):
    """Font family used for the frame label text. ``sans`` = Arial / Helvetica (default). ``sans-condensed`` = Arial
    Narrow. ``serif`` = Georgia / Times New Roman. ``serif-elegant`` = Palatino Linotype / Book Antiqua. ``mono`` =
    Courier New. Values resolve to safe system font stacks on the rendered SVG."""

    SANS = "sans"
    SANS_CONDENSED = "sans-condensed"
    SERIF = "serif"
    SERIF_ELEGANT = "serif-elegant"
    MONO = "mono"

    __str__ = str.__str__


Family1OrStr: TypeAlias = Annotated[Family1 | str, open_enum_validator(Family1)]
