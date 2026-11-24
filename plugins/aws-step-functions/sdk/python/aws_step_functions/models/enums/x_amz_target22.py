from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget22(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS = "AWSStepFunctions.SendTaskSuccess"

    __str__ = str.__str__


XAmzTarget22OrStr: TypeAlias = Annotated[XAmzTarget22 | str, open_enum_validator(XAmzTarget22)]
