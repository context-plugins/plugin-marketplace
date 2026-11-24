from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .author import Author, AuthorDict
from .base_commit import BaseCommit, BaseCommitDict
from .committer import Committer, CommitterDict
from .participant import Participant, ParticipantDict
from .repository_bitbucket_deployments_api import (
    RepositoryBitbucketDeploymentsApi,
    RepositoryBitbucketDeploymentsApiDict,
)
from .summary import Summary, SummaryDict


class Commit2(SdkBaseModel):
    """All Of base_commit, object, commit2."""

    hash: Optional[str] = UNSET
    date: Optional[RFC3339DateTime] = UNSET
    author: Optional[Author] = UNSET
    committer: Optional[Committer] = UNSET
    message: Optional[str] = UNSET
    summary: Optional[Summary] = UNSET
    parents: Optional[list[BaseCommit]] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    repository: Optional[RepositoryBitbucketDeploymentsApi] = UNSET
    participants: Optional[list[Participant]] = UNSET


class Commit2Dict(TypedDict):
    hash: NotRequired[str]
    date: NotRequired[RFC3339DateTime]
    author: NotRequired[AuthorDict]
    committer: NotRequired[CommitterDict]
    message: NotRequired[str]
    summary: NotRequired[SummaryDict]
    parents: NotRequired[list[BaseCommitDict]]
    type_: NotRequired[str]
    repository: NotRequired[RepositoryBitbucketDeploymentsApiDict]
    participants: NotRequired[list[ParticipantDict]]
