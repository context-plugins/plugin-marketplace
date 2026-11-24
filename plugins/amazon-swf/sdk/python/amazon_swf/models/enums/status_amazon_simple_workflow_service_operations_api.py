from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonSimpleWorkflowServiceOperationsApi(str, Enum):
    """The close status that must match the close status of an execution for it to meet the criteria of this filter."""

    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"
    TERMINATED = "TERMINATED"
    CONTINUED_AS_NEW = "CONTINUED_AS_NEW"
    TIMED_OUT = "TIMED_OUT"

    __str__ = str.__str__


StatusAmazonSimpleWorkflowServiceOperationsApiOrStr: TypeAlias = Annotated[
    StatusAmazonSimpleWorkflowServiceOperationsApi | str,
    open_enum_validator(StatusAmazonSimpleWorkflowServiceOperationsApi),
]
