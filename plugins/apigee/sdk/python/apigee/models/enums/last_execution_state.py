from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LastExecutionState(str, Enum):
    """Output only. The last execution state of the curation."""

    LAST_EXECUTION_STATE_UNSPECIFIED = "LAST_EXECUTION_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

    __str__ = str.__str__


LastExecutionStateOrStr: TypeAlias = Annotated[LastExecutionState | str, open_enum_validator(LastExecutionState)]
