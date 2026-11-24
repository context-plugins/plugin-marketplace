from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputType(str, Enum):
    """The input type associated with the specified category. POST_CALL refers to a category that is applied to batch
    transcriptions; REAL_TIME refers to a category that is applied to streaming transcriptions."""

    REAL_TIME = "REAL_TIME"
    POST_CALL = "POST_CALL"

    __str__ = str.__str__


InputTypeOrStr: TypeAlias = Annotated[InputType | str, open_enum_validator(InputType)]
