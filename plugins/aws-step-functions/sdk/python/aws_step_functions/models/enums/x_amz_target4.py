from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE = "AWSStepFunctions.CreateStateMachine"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
