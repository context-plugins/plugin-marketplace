from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget10(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_REQUEST_CANCEL_WORKFLOW_EXECUTION = "SimpleWorkflowService.RequestCancelWorkflowExecution"

    __str__ = str.__str__


XAmzTarget10OrStr: TypeAlias = Annotated[XAmzTarget10 | str, open_enum_validator(XAmzTarget10)]
