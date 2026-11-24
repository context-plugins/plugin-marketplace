from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """``Deprecated`` The Epic's state (to do, in progress, or done); will be ignored when ``epic_state_id`` is set."""

    IN_PROGRESS = "in progress"
    TO_DO = "to do"
    DONE = "done"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
