from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListSharedReportGroupsOutput(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""

    report_groups: Optional[list[str]] = Field(default=UNSET, alias="reportGroups")
    """The list of ARNs for the report groups shared with the current Amazon Web Services account or user."""


class ListSharedReportGroupsOutputDict(TypedDict):
    next_token: NotRequired[str]
    report_groups: NotRequired[list[str]]
