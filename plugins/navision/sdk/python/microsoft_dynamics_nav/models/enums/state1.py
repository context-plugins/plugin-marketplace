from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    """The user state"""

    ENABLED = "Enabled"
    DISABLED = "Disabled"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
