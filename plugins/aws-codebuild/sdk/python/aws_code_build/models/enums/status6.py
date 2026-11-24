from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status6(str, Enum):
    """The status used to filter reports. You can filter using one status only."""

    GENERATING = "GENERATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INCOMPLETE = "INCOMPLETE"
    DELETING = "DELETING"

    __str__ = str.__str__


Status6OrStr: TypeAlias = Annotated[Status6 | str, open_enum_validator(Status6)]
