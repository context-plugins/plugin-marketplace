from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state2_bitbucket_pullrequests_api import State2BitbucketPullrequestsApiOrStr
from .task_raw_content import TaskRawContent, TaskRawContentDict


class PullRequestTaskUpdate(SdkBaseModel):
    """A pullrequest task update"""

    model_config = ConfigDict(extra="forbid")

    content: Optional[TaskRawContent] = UNSET
    """task raw content"""

    state: Optional[State2BitbucketPullrequestsApiOrStr] = UNSET


class PullRequestTaskUpdateDict(TypedDict):
    content: NotRequired[TaskRawContentDict]
    state: NotRequired[State2BitbucketPullrequestsApiOrStr]
