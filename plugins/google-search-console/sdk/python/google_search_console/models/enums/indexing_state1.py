from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IndexingState1(str, Enum):
    """Whether or not the page blocks indexing through a noindex rule."""

    AMP_INDEXING_STATE_UNSPECIFIED = "AMP_INDEXING_STATE_UNSPECIFIED"
    AMP_INDEXING_ALLOWED = "AMP_INDEXING_ALLOWED"
    BLOCKED_DUE_TO_NOINDEX = "BLOCKED_DUE_TO_NOINDEX"
    BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"

    __str__ = str.__str__


IndexingState1OrStr: TypeAlias = Annotated[IndexingState1 | str, open_enum_validator(IndexingState1)]
