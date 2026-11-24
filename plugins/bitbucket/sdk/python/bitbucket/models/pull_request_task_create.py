from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .comment_bitbucket_pullrequests_api import CommentBitbucketPullrequestsApi, CommentBitbucketPullrequestsApiDict
from .task_raw_content import TaskRawContent, TaskRawContentDict


class PullRequestTaskCreate(SdkBaseModel):
    """A pullrequest task create"""

    model_config = ConfigDict(extra="forbid")

    content: TaskRawContent
    """task raw content"""

    comment: Optional[CommentBitbucketPullrequestsApi] = UNSET
    pending: Optional[bool] = UNSET


class PullRequestTaskCreateDict(TypedDict):
    content: TaskRawContentDict
    comment: NotRequired[CommentBitbucketPullrequestsApiDict]
    pending: NotRequired[bool]
