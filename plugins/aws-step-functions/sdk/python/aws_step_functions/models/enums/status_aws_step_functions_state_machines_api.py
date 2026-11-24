from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsStepFunctionsStateMachinesApi(str, Enum):
    """The current status of the state machine."""

    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

    __str__ = str.__str__


StatusAwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    StatusAwsStepFunctionsStateMachinesApi | str, open_enum_validator(StatusAwsStepFunctionsStateMachinesApi)
]
