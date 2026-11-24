from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .pull_request_label import PullRequestLabel, PullRequestLabelDict


class PullRequest(SdkBaseModel):
    """Corresponds to a VCS Pull Request attached to a Shortcut story."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    closed: bool
    """True/False boolean indicating whether the VCS pull request has been closed."""

    merged: bool
    """True/False boolean indicating whether the VCS pull request has been merged."""

    num_added: int
    """Number of lines added in the pull request, according to VCS."""

    branch_id: int
    """The ID of the branch for the particular pull request."""

    overlapping_stories: Optional[list[int]] = UNSET
    """An array of Story ids that have Pull Requests that change at least one of the same lines this Pull Request
    changes."""

    number: int
    """The pull request's unique number ID in VCS."""

    branch_name: str
    """The name of the branch for the particular pull request."""

    target_branch_name: str
    """The name of the target branch for the particular pull request."""

    num_commits: int | None
    """The number of commits on the pull request."""

    title: str
    """The title of the pull request."""

    updated_at: RFC3339DateTime
    """The time/date the pull request was created."""

    has_overlapping_stories: bool
    """Boolean indicating that the Pull Request has Stories that have Pull Requests that change at least one of the same
    lines this Pull Request changes."""

    draft: bool
    """True/False boolean indicating whether the VCS pull request is in the draft state."""

    id: int
    """The unique ID associated with the pull request in Shortcut."""

    vcs_labels: OptionalNullable[list[PullRequestLabel]] = UNSET
    """An array of PullRequestLabels attached to the PullRequest."""

    url: str
    """The URL for the pull request."""

    num_removed: int
    """Number of lines removed in the pull request, according to VCS."""

    review_status: Optional[str] = UNSET
    """The status of the review for the pull request."""

    num_modified: int | None
    """Number of lines modified in the pull request, according to VCS."""

    build_status: Optional[str] = UNSET
    """The status of the Continuous Integration workflow for the pull request."""

    target_branch_id: int
    """The ID of the target branch for the particular pull request."""

    repository_id: int
    """The ID of the repository for the particular pull request."""

    created_at: RFC3339DateTime
    """The time/date the pull request was created."""


class PullRequestDict(TypedDict):
    entity_type: str
    closed: bool
    merged: bool
    num_added: int
    branch_id: int
    overlapping_stories: NotRequired[list[int]]
    number: int
    branch_name: str
    target_branch_name: str
    num_commits: int | None
    title: str
    updated_at: RFC3339DateTime
    has_overlapping_stories: bool
    draft: bool
    id: int
    vcs_labels: NotRequired[list[PullRequestLabelDict] | None]
    url: str
    num_removed: int
    review_status: NotRequired[str]
    num_modified: int | None
    build_status: NotRequired[str]
    target_branch_id: int
    repository_id: int
    created_at: RFC3339DateTime
