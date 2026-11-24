from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget32(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_CLOSED_WORKFLOW_EXECUTIONS = "SimpleWorkflowService.ListClosedWorkflowExecutions"

    __str__ = str.__str__


XAmzTarget32OrStr: TypeAlias = Annotated[XAmzTarget32 | str, open_enum_validator(XAmzTarget32)]
