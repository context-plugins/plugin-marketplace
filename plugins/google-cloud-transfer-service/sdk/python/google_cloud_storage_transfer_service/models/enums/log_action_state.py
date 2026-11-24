from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogActionState(str, Enum):
    LOGGABLE_ACTION_STATE_UNSPECIFIED = "LOGGABLE_ACTION_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"

    __str__ = str.__str__


LogActionStateOrStr: TypeAlias = Annotated[LogActionState | str, open_enum_validator(LogActionState)]
