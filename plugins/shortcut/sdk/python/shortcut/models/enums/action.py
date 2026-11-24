from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Action(str, Enum):
    """The action of the entity referenced."""

    OPEN = "open"
    UPDATE = "update"
    REOPEN = "reopen"
    CLOSE = "close"
    SYNC = "sync"
    COMMENT = "comment"

    __str__ = str.__str__


ActionOrStr: TypeAlias = Annotated[Action | str, open_enum_validator(Action)]
