from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusType(str, Enum):
    """To return utterances that were recognized and handled, use Detected. To return utterances that were not
    recognized, use Missed."""

    DETECTED = "Detected"
    MISSED = "Missed"

    __str__ = str.__str__


StatusTypeOrStr: TypeAlias = Annotated[StatusType | str, open_enum_validator(StatusType)]
