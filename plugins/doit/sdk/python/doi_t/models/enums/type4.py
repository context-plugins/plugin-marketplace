from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4(str, Enum):
    """Component type."""

    ATTACHMENT = "attachment"
    COMBINER = "combiner"
    ELEMENT = "element"
    GROUP = "group"
    LINK = "link"
    NODE = "node"
    NOTE = "note"

    __str__ = str.__str__


Type4OrStr: TypeAlias = Annotated[Type4 | str, open_enum_validator(Type4)]
