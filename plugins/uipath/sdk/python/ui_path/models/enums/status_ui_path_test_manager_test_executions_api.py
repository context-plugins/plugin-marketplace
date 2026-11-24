from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathTestManagerTestExecutionsApi(str, Enum):
    """Aggregate execution status"""

    PENDING = "Pending"
    RUNNING = "Running"
    PASSED = "Passed"
    FAILED = "Failed"
    BLOCKED = "Blocked"
    CANCELLED = "Cancelled"

    __str__ = str.__str__


StatusUiPathTestManagerTestExecutionsApiOrStr: TypeAlias = Annotated[
    StatusUiPathTestManagerTestExecutionsApi | str, open_enum_validator(StatusUiPathTestManagerTestExecutionsApi)
]
