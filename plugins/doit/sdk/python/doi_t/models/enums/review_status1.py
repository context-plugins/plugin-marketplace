from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReviewStatus1(str, Enum):
    """The anomaly's review state."""

    NEEDS_REVIEW = "NEEDS_REVIEW"
    UNDER_REVIEW = "UNDER_REVIEW"
    RESOLVED = "RESOLVED"

    __str__ = str.__str__


ReviewStatus1OrStr: TypeAlias = Annotated[ReviewStatus1 | str, open_enum_validator(ReviewStatus1)]
