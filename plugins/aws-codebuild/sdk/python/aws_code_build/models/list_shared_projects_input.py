from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by2 import SortBy2OrStr
from .enums.sort_order6 import SortOrder6OrStr


class ListSharedProjectsInput(SdkBaseModel):
    sort_by: Optional[SortBy2OrStr] = Field(default=UNSET, alias="sortBy")
    """The criterion to be used to list build projects shared with the current Amazon Web Services account or user.
    Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on when information about the shared
    project was last changed."""

    sort_order: Optional[SortOrder6OrStr] = Field(default=UNSET, alias="sortOrder")
    """The order in which to list shared build projects. Valid values include: ASCENDING: List in ascending order.
    DESCENDING: List in descending order."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated shared build projects returned per response. Use nextToken to iterate pages in
    the list of returned Project objects. The default value is 100."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""


class ListSharedProjectsInputDict(TypedDict):
    sort_by: NotRequired[SortBy2OrStr]
    sort_order: NotRequired[SortOrder6OrStr]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
