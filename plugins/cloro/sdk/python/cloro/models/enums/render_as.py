from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenderAs(str, Enum):
    """How the product is rendered in the response"""

    INLINE = "inline"
    HERO = "hero"
    BLOCK = "block"

    __str__ = str.__str__


RenderAsOrStr: TypeAlias = Annotated[RenderAs | str, open_enum_validator(RenderAs)]
