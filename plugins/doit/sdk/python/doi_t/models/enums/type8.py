from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type8(str, Enum):
    """Type of the change."""

    NODE_CREATE = "NODE_CREATE"
    NODE_UPDATE = "NODE_UPDATE"
    NODE_DELETE = "NODE_DELETE"

    __str__ = str.__str__


Type8OrStr: TypeAlias = Annotated[Type8 | str, open_enum_validator(Type8)]
