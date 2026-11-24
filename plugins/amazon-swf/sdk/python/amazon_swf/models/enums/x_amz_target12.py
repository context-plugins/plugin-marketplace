from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget12(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_COMPLETED = "SimpleWorkflowService.RespondActivityTaskCompleted"

    __str__ = str.__str__


XAmzTarget12OrStr: TypeAlias = Annotated[XAmzTarget12 | str, open_enum_validator(XAmzTarget12)]
