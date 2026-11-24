from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WorkflowStateType(str, Enum):
    STARTED = "started"
    BACKLOG = "backlog"
    UNSTARTED = "unstarted"
    DONE = "done"

    __str__ = str.__str__


WorkflowStateTypeOrStr: TypeAlias = Annotated[WorkflowStateType | str, open_enum_validator(WorkflowStateType)]
