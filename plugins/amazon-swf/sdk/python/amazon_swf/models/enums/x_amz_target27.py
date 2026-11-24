from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget27(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_DOMAINS = "SimpleWorkflowService.ListDomains"

    __str__ = str.__str__


XAmzTarget27OrStr: TypeAlias = Annotated[XAmzTarget27 | str, open_enum_validator(XAmzTarget27)]
