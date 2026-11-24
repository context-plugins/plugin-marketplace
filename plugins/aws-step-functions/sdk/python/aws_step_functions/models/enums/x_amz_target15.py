from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget15(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_MAP_RUNS = "AWSStepFunctions.ListMapRuns"

    __str__ = str.__str__


XAmzTarget15OrStr: TypeAlias = Annotated[XAmzTarget15 | str, open_enum_validator(XAmzTarget15)]
