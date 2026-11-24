from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget14(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED = "SimpleWorkflowService.RespondDecisionTaskCompleted"

    __str__ = str.__str__


XAmzTarget14OrStr: TypeAlias = Annotated[XAmzTarget14 | str, open_enum_validator(XAmzTarget14)]
