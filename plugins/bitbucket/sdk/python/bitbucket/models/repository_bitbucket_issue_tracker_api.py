from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .branch_bitbucket_commits_api import BranchBitbucketCommitsApi, BranchBitbucketCommitsApiDict
from .enums.fork_policy import ForkPolicyOrStr
from .enums.scm import ScmOrStr
from .links4 import Links4, Links4Dict
from .project_bitbucket_issue_tracker_api import ProjectBitbucketIssueTrackerApi, ProjectBitbucketIssueTrackerApiDict


class RepositoryBitbucketIssueTrackerApi(SdkBaseModel):
    """All Of object, repository_Bitbucket Issue tracker API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links4] = UNSET
    uuid: Optional[str] = UNSET
    """The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this
    guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a
    different user."""

    full_name: Optional[str] = UNSET
    """The concatenation of the repository owner's username and the slugified name, e.g. "evzijst/interruptingcow". This
    is the same string used in Bitbucket URLs."""

    is_private: Optional[bool] = UNSET
    parent: Optional[RepositoryBitbucketIssueTrackerApi] = UNSET
    scm: Optional[ScmOrStr] = UNSET
    owner: Optional[Account] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET
    size: Optional[int] = UNSET
    language: Optional[str] = UNSET
    has_issues: Optional[bool] = UNSET
    """The issue tracker for this repository is enabled. Issue Tracker features are not supported for repositories in
    workspaces administered through admin.atlassian.com."""

    has_wiki: Optional[bool] = UNSET
    """The wiki for this repository is enabled. Wiki features are not supported for repositories in workspaces
    administered through admin.atlassian.com."""

    fork_policy: Optional[ForkPolicyOrStr] = UNSET
    """Controls the rules for forking this repository.

    * **allow_forks**: unrestricted forking
    * **no_public_forks**: restrict forking to private forks (forks cannot
      be made public later)
    * **no_forks**: deny all forking"""

    project: Optional[ProjectBitbucketIssueTrackerApi] = UNSET
    mainbranch: Optional[BranchBitbucketCommitsApi] = UNSET


class RepositoryBitbucketIssueTrackerApiDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links4Dict]
    uuid: NotRequired[str]
    full_name: NotRequired[str]
    is_private: NotRequired[bool]
    parent: NotRequired[RepositoryBitbucketIssueTrackerApiDict]
    scm: NotRequired[ScmOrStr]
    owner: NotRequired[AccountDict]
    name: NotRequired[str]
    description: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    size: NotRequired[int]
    language: NotRequired[str]
    has_issues: NotRequired[bool]
    has_wiki: NotRequired[bool]
    fork_policy: NotRequired[ForkPolicyOrStr]
    project: NotRequired[ProjectBitbucketIssueTrackerApiDict]
    mainbranch: NotRequired[BranchBitbucketCommitsApiDict]
