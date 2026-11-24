from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChildPolicy8(str, Enum):
    """If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated.
    This policy overrides the child policy specified for the workflow execution at registration time or when starting
    the execution. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A
    request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its
    history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
    ABANDON – No action is"""

    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

    __str__ = str.__str__


ChildPolicy8OrStr: TypeAlias = Annotated[ChildPolicy8 | str, open_enum_validator(ChildPolicy8)]
