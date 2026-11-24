from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DEPRECATE_ACTIVITY_TYPE = "SimpleWorkflowService.DeprecateActivityType"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
