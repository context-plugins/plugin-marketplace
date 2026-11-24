from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DELETE_WORKFLOW_TYPE = "SimpleWorkflowService.DeleteWorkflowType"

    __str__ = str.__str__


XAmzTarget21AmazonSimpleWorkflowServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi | str,
    open_enum_validator(XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi),
]
