from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Weight1(str, Enum):
    """Font weight of the frame label text. ``bold`` renders at SVG ``font-weight="700"``, ``normal`` at ``400``."""

    NORMAL = "normal"
    BOLD = "bold"

    __str__ = str.__str__


Weight1OrStr: TypeAlias = Annotated[Weight1 | str, open_enum_validator(Weight1)]
