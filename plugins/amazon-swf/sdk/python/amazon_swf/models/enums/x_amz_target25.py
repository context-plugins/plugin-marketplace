from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget25(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_REGISTER_WORKFLOW_TYPE = "SimpleWorkflowService.RegisterWorkflowType"

    __str__ = str.__str__


XAmzTarget25OrStr: TypeAlias = Annotated[XAmzTarget25 | str, open_enum_validator(XAmzTarget25)]
