from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget24(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_WORKFLOW_TYPES = "SimpleWorkflowService.ListWorkflowTypes"

    __str__ = str.__str__


XAmzTarget24OrStr: TypeAlias = Annotated[XAmzTarget24 | str, open_enum_validator(XAmzTarget24)]
