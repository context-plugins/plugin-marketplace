from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_ACTIVITY = "AWSStepFunctions.CreateActivity"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
