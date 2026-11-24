from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_search_options import BulkSearchOptions, BulkSearchOptionsDict


class BulkSearchRequest(SdkBaseModel):
    keywords: list[str]
    """Case-insensitively deduplicated product keywords. Each keyword may contain at most 300 characters."""

    options: Optional[BulkSearchOptions] = UNSET
    """Shared page-one options applied independently to every keyword."""


class BulkSearchRequestDict(TypedDict):
    keywords: list[str]
    options: NotRequired[BulkSearchOptionsDict]
