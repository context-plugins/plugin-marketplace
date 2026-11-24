from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget28(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_REGISTER_DOMAIN = "SimpleWorkflowService.RegisterDomain"

    __str__ = str.__str__


XAmzTarget28OrStr: TypeAlias = Annotated[XAmzTarget28 | str, open_enum_validator(XAmzTarget28)]
