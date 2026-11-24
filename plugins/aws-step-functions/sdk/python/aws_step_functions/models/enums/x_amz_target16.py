from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget16(str, Enum):
    AWS_STEP_FUNCTIONS_UPDATE_MAP_RUN = "AWSStepFunctions.UpdateMapRun"

    __str__ = str.__str__


XAmzTarget16OrStr: TypeAlias = Annotated[XAmzTarget16 | str, open_enum_validator(XAmzTarget16)]
