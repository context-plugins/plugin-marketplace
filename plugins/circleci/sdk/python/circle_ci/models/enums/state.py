from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """The current state of the pipeline"""

    CREATED = "created"
    ERRORED = "errored"
    SETUP_PENDING = "setup-pending"
    SETUP = "setup"
    PENDING = "pending"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
