from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget23(str, Enum):
    AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION = "AWSStepFunctions.StartSyncExecution"

    __str__ = str.__str__


XAmzTarget23OrStr: TypeAlias = Annotated[XAmzTarget23 | str, open_enum_validator(XAmzTarget23)]
