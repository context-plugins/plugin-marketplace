from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_order1_aws_code_build_builds_api import SortOrder1AwsCodeBuildBuildsApiOrStr


class ListBuildsInputAwsCodeBuildBuildsApi(SdkBaseModel):
    sort_order: Optional[SortOrder1AwsCodeBuildBuildsApiOrStr] = Field(default=UNSET, alias="sortOrder")
    """The order to list build IDs. Valid values include: ASCENDING: List the build IDs in ascending order by build ID.
    DESCENDING: List the build IDs in descending order by build ID."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, if there are more than 100 items in the list, only the first 100 items are returned,
    along with a unique string called a nextToken. To get the next batch of items in the list, call this operation
    again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each
    subsequent next token that is returned, until no more next tokens are returned."""


class ListBuildsInputAwsCodeBuildBuildsApiDict(TypedDict):
    sort_order: NotRequired[SortOrder1AwsCodeBuildBuildsApiOrStr]
    next_token: NotRequired[str]
