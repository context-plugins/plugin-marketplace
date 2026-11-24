from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget30(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION = "SimpleWorkflowService.StartWorkflowExecution"

    __str__ = str.__str__


XAmzTarget30OrStr: TypeAlias = Annotated[XAmzTarget30 | str, open_enum_validator(XAmzTarget30)]
