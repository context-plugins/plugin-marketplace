from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget20(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DESCRIBE_ACTIVITY_TYPE = "SimpleWorkflowService.DescribeActivityType"

    __str__ = str.__str__


XAmzTarget20OrStr: TypeAlias = Annotated[XAmzTarget20 | str, open_enum_validator(XAmzTarget20)]
