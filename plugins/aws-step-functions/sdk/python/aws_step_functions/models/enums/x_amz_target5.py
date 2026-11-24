from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5(str, Enum):
    AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE = "AWSStepFunctions.DeleteStateMachine"

    __str__ = str.__str__


XAmzTarget5OrStr: TypeAlias = Annotated[XAmzTarget5 | str, open_enum_validator(XAmzTarget5)]
