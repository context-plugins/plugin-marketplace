from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_EXECUTIONS = "AWSStepFunctions.ListExecutions"

    __str__ = str.__str__


XAmzTarget11OrStr: TypeAlias = Annotated[XAmzTarget11 | str, open_enum_validator(XAmzTarget11)]
