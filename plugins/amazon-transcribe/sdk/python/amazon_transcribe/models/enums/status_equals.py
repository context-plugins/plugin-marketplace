from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusEquals(str, Enum):
    """Returns only custom language models with the specified status. Language models are ordered by creation date, with
    the newest model first. If you do not include StatusEquals, all custom language models are returned."""

    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


StatusEqualsOrStr: TypeAlias = Annotated[StatusEquals | str, open_enum_validator(StatusEquals)]
