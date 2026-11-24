from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DefaultChildPolicy(str, Enum):
    """If set, specifies the default policy to use for the child workflow executions when a workflow execution of this
    type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This
    default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the
    StartChildWorkflowExecution Decision. The supported child policies are: TERMINATE – The child executions are
    terminated. REQUEST_CANCEL – A request to cancel is attempted for each child execution by recording a
    WorkflowExecutionCancelRequested event in its history."""

    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

    __str__ = str.__str__


DefaultChildPolicyOrStr: TypeAlias = Annotated[DefaultChildPolicy | str, open_enum_validator(DefaultChildPolicy)]
