from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .comment_bitbucket_pullrequests_api import CommentBitbucketPullrequestsApi, CommentBitbucketPullrequestsApiDict
from .content import Content, ContentDict
from .enums.state2_bitbucket_pullrequests_api import State2BitbucketPullrequestsApiOrStr
from .links5_bitbucket_pullrequests_api import Links5BitbucketPullrequestsApi, Links5BitbucketPullrequestsApiDict


class PullrequestCommentTask(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    created_on: RFC3339DateTime
    updated_on: RFC3339DateTime
    state: State2BitbucketPullrequestsApiOrStr
    content: Content
    creator: Account
    pending: Optional[bool] = UNSET
    resolved_on: Optional[RFC3339DateTime] = UNSET
    """The ISO8601 timestamp for when the task was resolved."""

    resolved_by: Optional[Account] = UNSET
    links: Optional[Links5BitbucketPullrequestsApi] = UNSET
    comment: Optional[CommentBitbucketPullrequestsApi] = UNSET


class PullrequestCommentTaskDict(TypedDict):
    id: NotRequired[int]
    created_on: RFC3339DateTime
    updated_on: RFC3339DateTime
    state: State2BitbucketPullrequestsApiOrStr
    content: ContentDict
    creator: AccountDict
    pending: NotRequired[bool]
    resolved_on: NotRequired[RFC3339DateTime]
    resolved_by: NotRequired[AccountDict]
    links: NotRequired[Links5BitbucketPullrequestsApiDict]
    comment: NotRequired[CommentBitbucketPullrequestsApiDict]
