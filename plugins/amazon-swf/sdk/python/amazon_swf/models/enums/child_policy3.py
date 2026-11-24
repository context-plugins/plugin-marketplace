from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChildPolicy3(str, Enum):
    """The policy used for the child workflow executions of this workflow execution. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""

    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

    __str__ = str.__str__


ChildPolicy3OrStr: TypeAlias = Annotated[ChildPolicy3 | str, open_enum_validator(ChildPolicy3)]
