from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_CANCELED = "SimpleWorkflowService.RespondActivityTaskCanceled"

    __str__ = str.__str__


XAmzTarget11OrStr: TypeAlias = Annotated[XAmzTarget11 | str, open_enum_validator(XAmzTarget11)]
