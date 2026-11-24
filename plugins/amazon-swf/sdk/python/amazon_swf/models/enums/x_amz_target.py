from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS = "SimpleWorkflowService.CountClosedWorkflowExecutions"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
