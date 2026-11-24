from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputType1(str, Enum):
    """Choose whether you want to create a real-time or a post-call category for your Call Analytics transcription.
    Specifying POST_CALL assigns your category to post-call transcriptions; categories with this input type cannot be
    applied to streaming (real-time) transcriptions. Specifying REAL_TIME assigns your category to streaming
    transcriptions; categories with this input type cannot be applied to post-call transcriptions. If you do not include
    InputType, your category is created as a post-call category by default."""

    REAL_TIME = "REAL_TIME"
    POST_CALL = "POST_CALL"

    __str__ = str.__str__


InputType1OrStr: TypeAlias = Annotated[InputType1 | str, open_enum_validator(InputType1)]
