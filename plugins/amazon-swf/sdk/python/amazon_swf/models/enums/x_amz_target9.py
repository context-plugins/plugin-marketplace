from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT = "SimpleWorkflowService.RecordActivityTaskHeartbeat"

    __str__ = str.__str__


XAmzTarget9OrStr: TypeAlias = Annotated[XAmzTarget9 | str, open_enum_validator(XAmzTarget9)]
