from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pull_request_branch import PullRequestBranch, PullRequestBranchDict
from .pull_request_commit import PullRequestCommit, PullRequestCommitDict
from .repository_bitbucket_pullrequests_api import (
    RepositoryBitbucketPullrequestsApi,
    RepositoryBitbucketPullrequestsApiDict,
)


class PullRequestEndpoint(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    repository: Optional[RepositoryBitbucketPullrequestsApi] = UNSET
    branch: Optional[PullRequestBranch] = UNSET
    commit: Optional[PullRequestCommit] = UNSET


class PullRequestEndpointDict(TypedDict):
    repository: NotRequired[RepositoryBitbucketPullrequestsApiDict]
    branch: NotRequired[PullRequestBranchDict]
    commit: NotRequired[PullRequestCommitDict]
