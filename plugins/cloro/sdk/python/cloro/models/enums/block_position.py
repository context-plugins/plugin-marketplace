from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BlockPosition(str, Enum):
    """Where the ad appeared on the SERP. ``top``/``bottom`` are text-ad blocks, ``middle`` covers direct/in-content
    ads, ``rhs`` is the right-hand-side sponsored-products carousel."""

    TOP = "top"
    BOTTOM = "bottom"
    MIDDLE = "middle"
    RHS = "rhs"

    __str__ = str.__str__


BlockPositionOrStr: TypeAlias = Annotated[BlockPosition | str, open_enum_validator(BlockPosition)]
