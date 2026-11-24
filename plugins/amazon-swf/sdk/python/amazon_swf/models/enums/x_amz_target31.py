from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget31(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_GET_WORKFLOW_EXECUTION_HISTORY = "SimpleWorkflowService.GetWorkflowExecutionHistory"

    __str__ = str.__str__


XAmzTarget31OrStr: TypeAlias = Annotated[XAmzTarget31 | str, open_enum_validator(XAmzTarget31)]
