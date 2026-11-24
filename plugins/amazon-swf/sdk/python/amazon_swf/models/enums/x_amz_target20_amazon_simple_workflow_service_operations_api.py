from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DELETE_ACTIVITY_TYPE = "SimpleWorkflowService.DeleteActivityType"

    __str__ = str.__str__


XAmzTarget20AmazonSimpleWorkflowServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi | str,
    open_enum_validator(XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi),
]
