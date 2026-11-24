from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExecutorStatus(str, Enum):
    EXECUTOR_STATUS_UNSPECIFIED = "EXECUTOR_STATUS_UNSPECIFIED"
    EXECUTOR_STATUS_ACTIVE = "EXECUTOR_STATUS_ACTIVE"
    EXECUTOR_STATUS_DEAD = "EXECUTOR_STATUS_DEAD"

    __str__ = str.__str__


ExecutorStatusOrStr: TypeAlias = Annotated[ExecutorStatus | str, open_enum_validator(ExecutorStatus)]
