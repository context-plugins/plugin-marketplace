from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget29(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_EXECUTION = "SimpleWorkflowService.DescribeWorkflowExecution"

    __str__ = str.__str__


XAmzTarget29OrStr: TypeAlias = Annotated[XAmzTarget29 | str, open_enum_validator(XAmzTarget29)]
