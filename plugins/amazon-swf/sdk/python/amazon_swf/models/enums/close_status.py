from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CloseStatus(str, Enum):
    """If the execution status is closed then this specifies how the execution was closed: COMPLETED – the execution was
    successfully completed. CANCELED – the execution was canceled.Cancellation allows the implementation to gracefully
    clean up before the execution is closed. TERMINATED – the execution was force terminated. FAILED – the execution
    failed to complete. TIMED_OUT – the execution did not complete in the alloted time and was automatically timed out.
    CONTINUED_AS_NEW – the execution is logically continued. This means the current execution was completed and a new
    execution was started to car"""

    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELED = "CANCELED"
    TERMINATED = "TERMINATED"
    CONTINUED_AS_NEW = "CONTINUED_AS_NEW"
    TIMED_OUT = "TIMED_OUT"

    __str__ = str.__str__


CloseStatusOrStr: TypeAlias = Annotated[CloseStatus | str, open_enum_validator(CloseStatus)]
