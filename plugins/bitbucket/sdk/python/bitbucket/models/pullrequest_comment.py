from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .comment_bitbucket_pullrequests_api import CommentBitbucketPullrequestsApi, CommentBitbucketPullrequestsApiDict
from .comment_resolution import CommentResolution, CommentResolutionDict
from .content import Content, ContentDict
from .inline import Inline, InlineDict
from .links4_bitbucket_pullrequests_api import Links4BitbucketPullrequestsApi, Links4BitbucketPullrequestsApiDict
from .pullrequest import Pullrequest, PullrequestDict


class PullrequestComment(SdkBaseModel):
    """All Of comment_Bitbucket Pullrequests API, object, pullrequest_comment."""

    id: Optional[int] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    content: Optional[Content] = UNSET
    user: Optional[Account] = UNSET
    deleted: Optional[bool] = UNSET
    parent: Optional[CommentBitbucketPullrequestsApi] = UNSET
    inline: Optional[Inline] = UNSET
    links: Optional[Links4BitbucketPullrequestsApi] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    pullrequest: Optional[Pullrequest] = UNSET
    resolution: Optional[CommentResolution] = UNSET
    """The resolution object for a Comment."""

    pending: Optional[bool] = UNSET


class PullrequestCommentDict(TypedDict):
    id: NotRequired[int]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    content: NotRequired[ContentDict]
    user: NotRequired[AccountDict]
    deleted: NotRequired[bool]
    parent: NotRequired[CommentBitbucketPullrequestsApiDict]
    inline: NotRequired[InlineDict]
    links: NotRequired[Links4BitbucketPullrequestsApiDict]
    type_: NotRequired[str]
    pullrequest: NotRequired[PullrequestDict]
    resolution: NotRequired[CommentResolutionDict]
    pending: NotRequired[bool]
