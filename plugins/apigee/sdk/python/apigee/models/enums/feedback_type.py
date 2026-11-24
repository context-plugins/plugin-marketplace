from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FeedbackType(str, Enum):
    """Required. The type of feedback being submitted."""

    FEEDBACK_TYPE_UNSPECIFIED = "FEEDBACK_TYPE_UNSPECIFIED"
    EXCLUDED_DETECTION = "EXCLUDED_DETECTION"

    __str__ = str.__str__


FeedbackTypeOrStr: TypeAlias = Annotated[FeedbackType | str, open_enum_validator(FeedbackType)]
