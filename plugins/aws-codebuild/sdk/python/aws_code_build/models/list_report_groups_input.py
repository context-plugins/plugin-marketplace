from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by1 import SortBy1OrStr
from .enums.sort_order4 import SortOrder4OrStr


class ListReportGroupsInput(SdkBaseModel):
    sort_order: Optional[SortOrder4OrStr] = Field(default=UNSET, alias="sortOrder")
    """Used to specify the order to sort the list of returned report groups. Valid values are ASCENDING and
    DESCENDING."""

    sort_by: Optional[SortBy1OrStr] = Field(default=UNSET, alias="sortBy")
    """The criterion to be used to list build report groups. Valid values include: CREATED_TIME: List based on when each
    report group was created. LAST_MODIFIED_TIME: List based on when each report group was last changed. NAME: List
    based on each report group's name."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated report groups returned per response. Use nextToken to iterate pages in the list
    of returned ReportGroup objects. The default value is 100."""


class ListReportGroupsInputDict(TypedDict):
    sort_order: NotRequired[SortOrder4OrStr]
    sort_by: NotRequired[SortBy1OrStr]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
