from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenderAs1(str, Enum):
    """How the product is rendered in the response. Absent for a gpt-6 product card."""

    INLINE = "inline"
    HERO = "hero"
    BLOCK = "block"

    __str__ = str.__str__


RenderAs1OrStr: TypeAlias = Annotated[RenderAs1 | str, open_enum_validator(RenderAs1)]
