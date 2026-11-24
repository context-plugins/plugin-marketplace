from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IndexingState(str, Enum):
    """Whether or not the page blocks indexing through a noindex rule."""

    INDEXING_STATE_UNSPECIFIED = "INDEXING_STATE_UNSPECIFIED"
    INDEXING_ALLOWED = "INDEXING_ALLOWED"
    BLOCKED_BY_META_TAG = "BLOCKED_BY_META_TAG"
    BLOCKED_BY_HTTP_HEADER = "BLOCKED_BY_HTTP_HEADER"
    BLOCKED_BY_ROBOTS_TXT = "BLOCKED_BY_ROBOTS_TXT"

    __str__ = str.__str__


IndexingStateOrStr: TypeAlias = Annotated[IndexingState | str, open_enum_validator(IndexingState)]
