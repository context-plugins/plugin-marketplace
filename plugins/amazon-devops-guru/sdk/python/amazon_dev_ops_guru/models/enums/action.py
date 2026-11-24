from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Action(str, Enum):
    """Specifies if the resource collection in the request is added or deleted to the resource collection."""

    ADD = "ADD"
    REMOVE = "REMOVE"

    __str__ = str.__str__


ActionOrStr: TypeAlias = Annotated[Action | str, open_enum_validator(Action)]
