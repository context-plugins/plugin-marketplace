from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsagePaginationMeta(SdkBaseModel):
    """Pagination metadata for usage summaries"""

    limit: int
    """The requested limit"""

    offset: int
    """The requested offset"""

    total: int
    """Total number of usage summaries available"""

    has_more: bool = Field(alias="hasMore")
    """Whether there are more results available"""


class UsagePaginationMetaDict(TypedDict):
    limit: int
    offset: int
    total: int
    has_more: bool
