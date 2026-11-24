from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget10(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_EXECUTION = "AWSStepFunctions.DescribeExecution"

    __str__ = str.__str__


XAmzTarget10OrStr: TypeAlias = Annotated[XAmzTarget10 | str, open_enum_validator(XAmzTarget10)]
