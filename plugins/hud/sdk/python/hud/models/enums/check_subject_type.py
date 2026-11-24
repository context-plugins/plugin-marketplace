from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckSubjectType(str, Enum):
    """Platform resources supported by the check framework."""

    ENVIRONMENT = "environment"
    TASKSET = "taskset"
    TASK = "task"
    TRACE = "trace"

    __str__ = str.__str__


CheckSubjectTypeOrStr: TypeAlias = Annotated[CheckSubjectType | str, open_enum_validator(CheckSubjectType)]
