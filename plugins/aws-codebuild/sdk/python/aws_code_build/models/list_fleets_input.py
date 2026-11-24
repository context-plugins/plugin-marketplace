from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by_aws_code_build_fleet_api import SortByAwsCodeBuildFleetApiOrStr
from .enums.sort_order_aws_code_build_fleet_api import SortOrderAwsCodeBuildFleetApiOrStr


class ListFleetsInput(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, if there are more than 100 items in the list, only the first 100 items are returned,
    along with a unique string called a nextToken. To get the next batch of items in the list, call this operation
    again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each
    subsequent next token that is returned, until no more next tokens are returned."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated compute fleets returned per response. Use nextToken to iterate pages in the list
    of returned compute fleets."""

    sort_order: Optional[SortOrderAwsCodeBuildFleetApiOrStr] = Field(default=UNSET, alias="sortOrder")
    """The order in which to list compute fleets. Valid values include: ASCENDING: List in ascending order. DESCENDING:
    List in descending order. Use sortBy to specify the criterion to be used to list compute fleet names."""

    sort_by: Optional[SortByAwsCodeBuildFleetApiOrStr] = Field(default=UNSET, alias="sortBy")
    """The criterion to be used to list compute fleet names. Valid values include: CREATED_TIME: List based on when each
    compute fleet was created. LAST_MODIFIED_TIME: List based on when information about each compute fleet was last
    changed. NAME: List based on each compute fleet's name. Use sortOrder to specify in what order to list the compute
    fleet names based on the preceding criteria."""


class ListFleetsInputDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    sort_order: NotRequired[SortOrderAwsCodeBuildFleetApiOrStr]
    sort_by: NotRequired[SortByAwsCodeBuildFleetApiOrStr]
