from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget15(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_SIGNAL_WORKFLOW_EXECUTION = "SimpleWorkflowService.SignalWorkflowExecution"

    __str__ = str.__str__


XAmzTarget15OrStr: TypeAlias = Annotated[XAmzTarget15 | str, open_enum_validator(XAmzTarget15)]
