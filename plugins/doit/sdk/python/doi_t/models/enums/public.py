from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Public(str, Enum):
    """Public sharing access level for the budget."""

    OWNER = "owner"
    EDITOR = "editor"
    VIEWER = "viewer"

    __str__ = str.__str__


PublicOrStr: TypeAlias = Annotated[Public | str, open_enum_validator(Public)]
