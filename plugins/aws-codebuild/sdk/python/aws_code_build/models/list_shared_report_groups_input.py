from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by3 import SortBy3OrStr
from .enums.sort_order7 import SortOrder7OrStr


class ListSharedReportGroupsInput(SdkBaseModel):
    sort_order: Optional[SortOrder7OrStr] = Field(default=UNSET, alias="sortOrder")
    """The order in which to list shared report groups. Valid values include: ASCENDING: List in ascending order.
    DESCENDING: List in descending order."""

    sort_by: Optional[SortBy3OrStr] = Field(default=UNSET, alias="sortBy")
    """The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid
    values include: ARN: List based on the ARN. MODIFIED_TIME: List based on when information about the shared report
    group was last changed."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated shared report groups per response. Use nextToken to iterate pages in the list of
    returned ReportGroup objects. The default value is 100."""


class ListSharedReportGroupsInputDict(TypedDict):
    sort_order: NotRequired[SortOrder7OrStr]
    sort_by: NotRequired[SortBy3OrStr]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
