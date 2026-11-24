from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .content import Content, ContentDict
from .inline import Inline, InlineDict
from .links2_bitbucket_issue_tracker_api import Links2BitbucketIssueTrackerApi, Links2BitbucketIssueTrackerApiDict


class CommentBitbucketIssueTrackerApi(SdkBaseModel):
    """All Of object, comment_Bitbucket Issue tracker API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    id: Optional[int] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    content: Optional[Content] = UNSET
    user: Optional[Account] = UNSET
    deleted: Optional[bool] = UNSET
    parent: Optional[CommentBitbucketIssueTrackerApi] = UNSET
    inline: Optional[Inline] = UNSET
    links: Optional[Links2BitbucketIssueTrackerApi] = UNSET


class CommentBitbucketIssueTrackerApiDict(TypedDict):
    type_: NotRequired[str]
    id: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    content: NotRequired[ContentDict]
    user: NotRequired[AccountDict]
    deleted: NotRequired[bool]
    parent: NotRequired[CommentBitbucketIssueTrackerApiDict]
    inline: NotRequired[InlineDict]
    links: NotRequired[Links2BitbucketIssueTrackerApiDict]
