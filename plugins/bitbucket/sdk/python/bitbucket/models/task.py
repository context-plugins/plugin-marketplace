from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .content import Content, ContentDict
from .enums.state2_bitbucket_pullrequests_api import State2BitbucketPullrequestsApiOrStr


class Task(SdkBaseModel):
    """A task object."""

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


class TaskDict(TypedDict):
    id: NotRequired[int]
    created_on: RFC3339DateTime
    updated_on: RFC3339DateTime
    state: State2BitbucketPullrequestsApiOrStr
    content: ContentDict
    creator: AccountDict
    pending: NotRequired[bool]
    resolved_on: NotRequired[RFC3339DateTime]
    resolved_by: NotRequired[AccountDict]
