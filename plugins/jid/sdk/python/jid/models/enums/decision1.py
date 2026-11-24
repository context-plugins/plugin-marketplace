from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Decision1(str, Enum):
    PROCEED = "proceed"
    REVIEW = "review"
    STOP = "stop"
    INSUFFICIENT_DATA = "insufficient_data"

    __str__ = str.__str__


Decision1OrStr: TypeAlias = Annotated[Decision1 | str, open_enum_validator(Decision1)]
