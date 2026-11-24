from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget22(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_REGISTER_ACTIVITY_TYPE = "SimpleWorkflowService.RegisterActivityType"

    __str__ = str.__str__


XAmzTarget22OrStr: TypeAlias = Annotated[XAmzTarget22 | str, open_enum_validator(XAmzTarget22)]
