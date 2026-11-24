from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChildPolicy(str, Enum):
    """If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by
    calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the
    default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child
    policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for
    each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider
    to take appropriate actions"""

    TERMINATE = "TERMINATE"
    REQUEST_CANCEL = "REQUEST_CANCEL"
    ABANDON = "ABANDON"

    __str__ = str.__str__


ChildPolicyOrStr: TypeAlias = Annotated[ChildPolicy | str, open_enum_validator(ChildPolicy)]
