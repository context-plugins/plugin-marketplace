from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget14(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_MAP_RUN = "AWSStepFunctions.DescribeMapRun"

    __str__ = str.__str__


XAmzTarget14OrStr: TypeAlias = Annotated[XAmzTarget14 | str, open_enum_validator(XAmzTarget14)]
