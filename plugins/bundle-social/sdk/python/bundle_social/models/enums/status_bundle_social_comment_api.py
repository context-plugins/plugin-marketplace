from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialCommentApi(str, Enum):
    PENDING = "PENDING"
    FETCHING = "FETCHING"
    RETRYING = "RETRYING"
    COMPLETED = "COMPLETED"
    SKIPPED = "SKIPPED"
    FAILED = "FAILED"
    RATE_LIMITED = "RATE_LIMITED"

    __str__ = str.__str__


StatusBundleSocialCommentApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialCommentApi | str, open_enum_validator(StatusBundleSocialCommentApi)
]
