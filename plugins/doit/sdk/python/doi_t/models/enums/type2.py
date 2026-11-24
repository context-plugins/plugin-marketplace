from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """Component bucket the related resource lives in."""

    NODE = "node"
    ELEMENT = "element"
    GROUP = "group"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
