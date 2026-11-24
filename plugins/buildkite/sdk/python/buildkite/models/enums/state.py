from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    RUNNING = "running"
    SCHEDULED = "scheduled"
    PASSED = "passed"
    FAILED = "failed"
    BLOCKED = "blocked"
    CANCELED = "canceled"
    CANCELING = "canceling"
    SKIPPED = "skipped"
    NOT_RUN = "not_run"
    FINISHED = "finished"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
