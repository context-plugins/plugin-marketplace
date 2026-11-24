from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State3(str, Enum):
    """The state of the vulnerability."""

    OPEN = "OPEN"
    REMEDIATED = "REMEDIATED"
    DECLINED = "DECLINED"

    __str__ = str.__str__


State3OrStr: TypeAlias = Annotated[State3 | str, open_enum_validator(State3)]
