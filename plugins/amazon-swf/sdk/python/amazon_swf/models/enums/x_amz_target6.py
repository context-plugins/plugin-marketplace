from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DEPRECATE_WORKFLOW_TYPE = "SimpleWorkflowService.DeprecateWorkflowType"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
