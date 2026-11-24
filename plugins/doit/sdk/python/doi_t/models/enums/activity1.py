from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Activity1(str, Enum):
    """Activity type."""

    NODE_CREATE = "NODE_CREATE"
    NODE_UPDATE = "NODE_UPDATE"
    NODE_DELETE = "NODE_DELETE"

    __str__ = str.__str__


Activity1OrStr: TypeAlias = Annotated[Activity1 | str, open_enum_validator(Activity1)]
