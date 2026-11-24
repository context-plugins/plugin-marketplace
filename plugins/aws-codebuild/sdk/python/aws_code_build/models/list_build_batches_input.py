from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_batch_filter import BuildBatchFilter, BuildBatchFilterDict
from .enums.sort_order1 import SortOrder1OrStr


class ListBuildBatchesInput(SdkBaseModel):
    filter: Optional[BuildBatchFilter] = UNSET
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return."""

    sort_order: Optional[SortOrder1OrStr] = Field(default=UNSET, alias="sortOrder")
    """Specifies the sort order of the returned items. Valid values include: ASCENDING: List the batch build identifiers
    in ascending order by identifier. DESCENDING: List the batch build identifiers in descending order by identifier."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The nextToken value returned from a previous call to ListBuildBatches. This specifies the next item to return. To
    return the beginning of the list, exclude this parameter."""


class ListBuildBatchesInputDict(TypedDict):
    filter: NotRequired[BuildBatchFilterDict]
    max_results: NotRequired[int]
    sort_order: NotRequired[SortOrder1OrStr]
    next_token: NotRequired[str]
