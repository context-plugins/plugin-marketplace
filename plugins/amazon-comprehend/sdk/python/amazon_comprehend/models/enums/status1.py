from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """The dataset status. While the system creates the dataset, the status is CREATING. When the dataset is ready to
    use, the status changes to COMPLETED."""

    CREATING = "CREATING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
