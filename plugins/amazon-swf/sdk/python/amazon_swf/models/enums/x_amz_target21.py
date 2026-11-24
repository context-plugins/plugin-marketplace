from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_ACTIVITY_TYPES = "SimpleWorkflowService.ListActivityTypes"

    __str__ = str.__str__


XAmzTarget21OrStr: TypeAlias = Annotated[XAmzTarget21 | str, open_enum_validator(XAmzTarget21)]
