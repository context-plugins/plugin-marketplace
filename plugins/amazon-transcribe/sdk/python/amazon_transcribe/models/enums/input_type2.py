from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputType2(str, Enum):
    """Choose whether you want to update a real-time or a post-call category. The input type you specify must match the
    input type specified when the category was created. For example, if you created a category with the POST_CALL input
    type, you must use POST_CALL as the input type when updating this category."""

    REAL_TIME = "REAL_TIME"
    POST_CALL = "POST_CALL"

    __str__ = str.__str__


InputType2OrStr: TypeAlias = Annotated[InputType2 | str, open_enum_validator(InputType2)]
