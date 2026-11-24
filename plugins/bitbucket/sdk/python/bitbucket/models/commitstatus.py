from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.state_bitbucket_commit_statuses_api import StateBitbucketCommitStatusesApiOrStr
from .links_bitbucket_commit_statuses_api import LinksBitbucketCommitStatusesApi, LinksBitbucketCommitStatusesApiDict


class Commitstatus(SdkBaseModel):
    """All Of object, commitstatus."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[LinksBitbucketCommitStatusesApi] = UNSET
    key: str
    """An identifier for the status that's unique to
            its type (current "build" is the only supported type) and the vendor,
            e.g. BB-DEPLOY"""

    refname: Optional[str] = UNSET
    """The name of the ref that pointed to this commit at the time the status object was created. Note that this the ref
    may since have moved off of the commit. This optional field can be useful for build systems whose build triggers and
    configuration are branch-dependent (e.g. a Pipeline build). It is legitimate for this field to not be set, or even
    apply (e.g. a static linting job)."""

    url: Optional[str] = UNSET
    """A URL linking back to the vendor or build system, for providing more information about whatever process produced
    this status. Accepts context variables ``repository`` and ``commit`` that Bitbucket will evaluate at runtime
    whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will
    turn into https://foo.com/builds/foo/bar at render time."""

    state: StateBitbucketCommitStatusesApiOrStr
    """Provides some indication of the status of this commit"""

    name: Optional[str] = UNSET
    """An identifier for the build itself, e.g. BB-DEPLOY-1"""

    description: Optional[str] = UNSET
    """A description of the build (e.g. "Unit tests in Bamboo")"""

    created_on: Optional[RFC3339DateTime] = UNSET
    updated_on: Optional[RFC3339DateTime] = UNSET


class CommitstatusDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[LinksBitbucketCommitStatusesApiDict]
    key: str
    refname: NotRequired[str]
    url: NotRequired[str]
    state: StateBitbucketCommitStatusesApiOrStr
    name: NotRequired[str]
    description: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
