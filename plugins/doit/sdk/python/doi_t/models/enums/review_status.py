from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReviewStatus(str, Enum):
    """The review state to move the anomaly to."""

    NEEDS_REVIEW = "NEEDS_REVIEW"
    UNDER_REVIEW = "UNDER_REVIEW"
    RESOLVED = "RESOLVED"

    __str__ = str.__str__


ReviewStatusOrStr: TypeAlias = Annotated[ReviewStatus | str, open_enum_validator(ReviewStatus)]
