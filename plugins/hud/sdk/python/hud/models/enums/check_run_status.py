from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CheckRunStatus(str, Enum):
    """Lifecycle states for a platform check run."""

    RUNNING = "running"
    PASSED = "passed"
    FAILED = "failed"
    ERROR = "error"

    __str__ = str.__str__


CheckRunStatusOrStr: TypeAlias = Annotated[CheckRunStatus | str, open_enum_validator(CheckRunStatus)]
