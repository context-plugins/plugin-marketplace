from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1(str, Enum):
    """The state of the deployment."""

    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCESSFUL = "SUCCESSFUL"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"
    ROLLED_BACK = "ROLLED_BACK"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


State1OrStr: TypeAlias = Annotated[State1 | str, open_enum_validator(State1)]
