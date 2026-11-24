from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget13(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_FAILED = "SimpleWorkflowService.RespondActivityTaskFailed"

    __str__ = str.__str__


XAmzTarget13OrStr: TypeAlias = Annotated[XAmzTarget13 | str, open_enum_validator(XAmzTarget13)]
