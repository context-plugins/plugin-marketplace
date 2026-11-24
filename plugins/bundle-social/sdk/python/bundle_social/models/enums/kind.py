from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    """Whether the background is a flat color, a gradient, or an illustration."""

    COLOR = "color"
    GRADIENT = "gradient"
    ILLUSTRATION = "illustration"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
