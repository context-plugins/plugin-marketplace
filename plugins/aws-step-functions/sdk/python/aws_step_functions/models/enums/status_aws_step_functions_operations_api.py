from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsStepFunctionsOperationsApi(str, Enum):
    """The execution status of the state."""

    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    RETRIABLE = "RETRIABLE"
    CAUGHT_ERROR = "CAUGHT_ERROR"

    __str__ = str.__str__


StatusAwsStepFunctionsOperationsApiOrStr: TypeAlias = Annotated[
    StatusAwsStepFunctionsOperationsApi | str, open_enum_validator(StatusAwsStepFunctionsOperationsApi)
]
