from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChildPolicy4(str, Enum):
    """The policy to use for the child workflow executions of the new execution if it is terminated by calling the
    TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""

    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

    __str__ = str.__str__


ChildPolicy4OrStr: TypeAlias = Annotated[ChildPolicy4 | str, open_enum_validator(ChildPolicy4)]
