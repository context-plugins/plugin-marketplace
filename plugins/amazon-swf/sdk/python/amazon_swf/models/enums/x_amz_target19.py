from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_WORKFLOW_TYPE = "SimpleWorkflowService.UndeprecateWorkflowType"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
