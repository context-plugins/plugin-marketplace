from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NodeType(str, Enum):
    """Specifies whether the node is the end of a path (Exit) or not (Inner)."""

    INNER = "Inner"
    EXIT = "Exit"

    __str__ = str.__str__


NodeTypeOrStr: TypeAlias = Annotated[NodeType | str, open_enum_validator(NodeType)]
