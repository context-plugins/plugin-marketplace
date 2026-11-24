from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_ACTIVITY_TASKS = "SimpleWorkflowService.CountPendingActivityTasks"

    __str__ = str.__str__


XAmzTarget2OrStr: TypeAlias = Annotated[XAmzTarget2 | str, open_enum_validator(XAmzTarget2)]
