from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget34(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_TAGS_FOR_RESOURCE = "SimpleWorkflowService.ListTagsForResource"

    __str__ = str.__str__


XAmzTarget34OrStr: TypeAlias = Annotated[XAmzTarget34 | str, open_enum_validator(XAmzTarget34)]
