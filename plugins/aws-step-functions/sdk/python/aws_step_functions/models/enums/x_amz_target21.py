from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT = "AWSStepFunctions.SendTaskHeartbeat"

    __str__ = str.__str__


XAmzTarget21OrStr: TypeAlias = Annotated[XAmzTarget21 | str, open_enum_validator(XAmzTarget21)]
