from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReviewReplyState(str, Enum):
    REVIEW_REPLY_STATE_UNSPECIFIED = "REVIEW_REPLY_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    REJECTED = "REJECTED"
    APPROVED = "APPROVED"

    __str__ = str.__str__


ReviewReplyStateOrStr: TypeAlias = Annotated[ReviewReplyState | str, open_enum_validator(ReviewReplyState)]
