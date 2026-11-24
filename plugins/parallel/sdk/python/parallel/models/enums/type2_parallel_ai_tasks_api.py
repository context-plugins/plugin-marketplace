from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2ParallelAiTasksApi(str, Enum):
    """Type of warning. Note that adding new warning types is considered a backward-compatible change."""

    SPEC_VALIDATION_WARNING = "spec_validation_warning"
    INPUT_VALIDATION_WARNING = "input_validation_warning"
    WARNING = "warning"

    __str__ = str.__str__


Type2ParallelAiTasksApiOrStr: TypeAlias = Annotated[
    Type2ParallelAiTasksApi | str, open_enum_validator(Type2ParallelAiTasksApi)
]
