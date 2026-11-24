from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget16(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_TERMINATE_WORKFLOW_EXECUTION = "SimpleWorkflowService.TerminateWorkflowExecution"

    __str__ = str.__str__


XAmzTarget16OrStr: TypeAlias = Annotated[XAmzTarget16 | str, open_enum_validator(XAmzTarget16)]
