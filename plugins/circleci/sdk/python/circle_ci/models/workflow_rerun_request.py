from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowRerunRequest(SdkBaseModel):
    jobs: Optional[list[UUID]] = UNSET
    """List of job IDs to rerun. If empty, all jobs will be rerun."""

    from_failed: Optional[bool] = UNSET
    """Whether to rerun only from failed jobs"""

    enable_ssh: Optional[bool] = UNSET
    """Whether to enable SSH access for the rerun"""

    sparse_tree: Optional[bool] = UNSET
    """Whether to rerun only the specified jobs and their dependencies"""


class WorkflowRerunRequestDict(TypedDict):
    jobs: NotRequired[list[UUID]]
    from_failed: NotRequired[bool]
    enable_ssh: NotRequired[bool]
    sparse_tree: NotRequired[bool]
