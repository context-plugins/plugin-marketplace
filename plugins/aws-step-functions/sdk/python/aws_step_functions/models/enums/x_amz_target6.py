from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE = "AWSStepFunctions.DescribeStateMachine"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
