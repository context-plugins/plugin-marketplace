from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State3(str, Enum):
    """Provides some indication of the status of this commit"""

    FAILED = "FAILED"
    INPROGRESS = "INPROGRESS"
    STOPPED = "STOPPED"
    SUCCESSFUL = "SUCCESSFUL"

    __str__ = str.__str__


State3OrStr: TypeAlias = Annotated[State3 | str, open_enum_validator(State3)]
