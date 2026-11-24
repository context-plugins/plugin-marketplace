from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .enums.state1_bitbucket_pullrequests_api import State1BitbucketPullrequestsApiOrStr
from .links3_bitbucket_pullrequests_api import Links3BitbucketPullrequestsApi, Links3BitbucketPullrequestsApiDict
from .participant import Participant, ParticipantDict
from .pull_request_commit import PullRequestCommit, PullRequestCommitDict
from .pull_request_endpoint_bitbucket_workspaces_api import (
    PullRequestEndpointBitbucketWorkspacesApi,
    PullRequestEndpointBitbucketWorkspacesApiDict,
)
from .rendered_pull_request_markup import RenderedPullRequestMarkup, RenderedPullRequestMarkupDict
from .summary import Summary, SummaryDict


class PullrequestBitbucketWorkspacesApi(SdkBaseModel):
    """All Of object, pullrequest_Bitbucket Workspaces API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links3BitbucketPullrequestsApi] = UNSET
    id: Optional[int] = UNSET
    """The pull request's unique ID. Note that pull request IDs are only unique within their associated repository."""

    title: Optional[str] = UNSET
    """Title of the pull request."""

    rendered: Optional[RenderedPullRequestMarkup] = UNSET
    """User provided pull request text, interpreted in a markup language and rendered in HTML"""

    summary: Optional[Summary] = UNSET
    state: Optional[State1BitbucketPullrequestsApiOrStr] = UNSET
    """The pull request's current status."""

    author: Optional[Account] = UNSET
    source: Optional[PullRequestEndpointBitbucketWorkspacesApi] = UNSET
    destination: Optional[PullRequestEndpointBitbucketWorkspacesApi] = UNSET
    merge_commit: Optional[PullRequestCommit] = UNSET
    comment_count: Optional[int] = UNSET
    """The number of comments for a specific pull request."""

    task_count: Optional[int] = UNSET
    """The number of open tasks for a specific pull request."""

    close_source_branch: Optional[bool] = UNSET
    """A boolean flag indicating if merging the pull request closes the source branch."""

    closed_by: Optional[Account] = UNSET
    reason: Optional[str] = UNSET
    """Explains why a pull request was declined. This field is only applicable to pull requests in rejected state."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The ISO8601 timestamp the request was created."""

    updated_on: Optional[RFC3339DateTime] = UNSET
    """The ISO8601 timestamp the request was last updated."""

    reviewers: Optional[list[Account]] = UNSET
    """The list of users that were added as reviewers on this pull request when it was created. For performance reasons,
    the API only includes this list on a pull request's ``self`` URL."""

    participants: Optional[list[Participant]] = UNSET
    """The list of users that are collaborating on this pull request.
            Collaborators are user that:

            * are added to the pull request as a reviewer (part of the reviewers
              list)
            * are not explicit reviewers, but have commented on the pull request
            * are not explicit reviewers, but have approved the pull request

            Each user is wrapped in an object that indicates the user's role and
            whether they have approved the pull request. For performance reasons,
            the API only returns this list when an API requests a pull request by
            id."""

    draft: Optional[bool] = UNSET
    """A boolean flag indicating whether the pull request is a draft."""

    queued: Optional[bool] = UNSET
    """A boolean flag indicating whether the pull request is queued"""


class PullrequestBitbucketWorkspacesApiDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links3BitbucketPullrequestsApiDict]
    id: NotRequired[int]
    title: NotRequired[str]
    rendered: NotRequired[RenderedPullRequestMarkupDict]
    summary: NotRequired[SummaryDict]
    state: NotRequired[State1BitbucketPullrequestsApiOrStr]
    author: NotRequired[AccountDict]
    source: NotRequired[PullRequestEndpointBitbucketWorkspacesApiDict]
    destination: NotRequired[PullRequestEndpointBitbucketWorkspacesApiDict]
    merge_commit: NotRequired[PullRequestCommitDict]
    comment_count: NotRequired[int]
    task_count: NotRequired[int]
    close_source_branch: NotRequired[bool]
    closed_by: NotRequired[AccountDict]
    reason: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    reviewers: NotRequired[list[AccountDict]]
    participants: NotRequired[list[ParticipantDict]]
    draft: NotRequired[bool]
    queued: NotRequired[bool]
