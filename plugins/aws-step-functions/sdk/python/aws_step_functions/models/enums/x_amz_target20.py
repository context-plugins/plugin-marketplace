from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget20(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_FAILURE = "AWSStepFunctions.SendTaskFailure"

    __str__ = str.__str__


XAmzTarget20OrStr: TypeAlias = Annotated[XAmzTarget20 | str, open_enum_validator(XAmzTarget20)]
