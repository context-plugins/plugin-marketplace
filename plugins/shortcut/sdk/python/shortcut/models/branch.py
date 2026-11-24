from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .pull_request import PullRequest, PullRequestDict


class Branch(SdkBaseModel):
    """Branch refers to a VCS branch. Branches are feature branches associated with Shortcut Stories."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    deleted: bool
    """A true/false boolean indicating if the Branch has been deleted."""

    name: str
    """The name of the Branch."""

    persistent: bool
    """This field is deprecated, and will always be false."""

    updated_at: RFC3339DateTime | None
    """The time/date the Branch was updated."""

    pull_requests: list[PullRequest]
    """An array of PullRequests attached to the Branch (there is usually only one)."""

    merged_branch_ids: list[int]
    """The IDs of the Branches the Branch has been merged into."""

    id: int | None
    """The unique ID of the Branch."""

    url: str
    """The URL of the Branch."""

    repository_id: int
    """The ID of the Repository that contains the Branch."""

    created_at: RFC3339DateTime | None
    """The time/date the Branch was created."""


class BranchDict(TypedDict):
    entity_type: str
    deleted: bool
    name: str
    persistent: bool
    updated_at: RFC3339DateTime | None
    pull_requests: list[PullRequestDict]
    merged_branch_ids: list[int]
    id: int | None
    url: str
    repository_id: int
    created_at: RFC3339DateTime | None
