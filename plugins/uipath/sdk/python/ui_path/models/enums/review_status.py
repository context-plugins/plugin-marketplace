from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReviewStatus(str, Enum):
    """Manual review status for failed items"""

    NONE = "None"
    IN_REVIEW = "InReview"
    VERIFIED = "Verified"
    RETRIED = "Retried"

    __str__ = str.__str__


ReviewStatusOrStr: TypeAlias = Annotated[ReviewStatus | str, open_enum_validator(ReviewStatus)]
