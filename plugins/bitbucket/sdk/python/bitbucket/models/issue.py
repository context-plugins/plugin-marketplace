from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .component import Component, ComponentDict
from .content import Content, ContentDict
from .enums.kind_bitbucket_issue_tracker_api import KindBitbucketIssueTrackerApiOrStr
from .enums.priority import PriorityOrStr
from .enums.state1 import State1OrStr
from .links3_bitbucket_issue_tracker_api import Links3BitbucketIssueTrackerApi, Links3BitbucketIssueTrackerApiDict
from .milestone import Milestone, MilestoneDict
from .repository_bitbucket_issue_tracker_api import (
    RepositoryBitbucketIssueTrackerApi,
    RepositoryBitbucketIssueTrackerApiDict,
)
from .version import Version, VersionDict


class Issue(SdkBaseModel):
    """All Of object, issue."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links3BitbucketIssueTrackerApi] = UNSET
    id: Optional[int] = UNSET
    repository: Optional[RepositoryBitbucketIssueTrackerApi] = UNSET
    title: Optional[str] = UNSET
    reporter: Optional[Account] = UNSET
    assignee: Optional[Account] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    edited_on: Optional[RFC3339DateTime] = UNSET
    state: Optional[State1OrStr] = UNSET
    kind: Optional[KindBitbucketIssueTrackerApiOrStr] = UNSET
    priority: Optional[PriorityOrStr] = UNSET
    milestone: Optional[Milestone] = UNSET
    version: Optional[Version] = UNSET
    component: Optional[Component] = UNSET
    votes: Optional[int] = UNSET
    content: Optional[Content] = UNSET


class IssueDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links3BitbucketIssueTrackerApiDict]
    id: NotRequired[int]
    repository: NotRequired[RepositoryBitbucketIssueTrackerApiDict]
    title: NotRequired[str]
    reporter: NotRequired[AccountDict]
    assignee: NotRequired[AccountDict]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    edited_on: NotRequired[RFC3339DateTime]
    state: NotRequired[State1OrStr]
    kind: NotRequired[KindBitbucketIssueTrackerApiOrStr]
    priority: NotRequired[PriorityOrStr]
    milestone: NotRequired[MilestoneDict]
    version: NotRequired[VersionDict]
    component: NotRequired[ComponentDict]
    votes: NotRequired[int]
    content: NotRequired[ContentDict]
