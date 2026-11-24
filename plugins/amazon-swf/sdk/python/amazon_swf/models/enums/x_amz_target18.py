from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget18(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_DOMAIN = "SimpleWorkflowService.UndeprecateDomain"

    __str__ = str.__str__


XAmzTarget18OrStr: TypeAlias = Annotated[XAmzTarget18 | str, open_enum_validator(XAmzTarget18)]
