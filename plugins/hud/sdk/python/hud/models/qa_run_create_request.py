from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QaRunCreateRequest(SdkBaseModel):
    """Run each check on each subject; the request's analysis rollouts share one hidden QA job.

    Every check must judge the subjects' type. A task subject is its current version."""

    trace_ids: Optional[list[UUID]] = UNSET
    task_ids: Optional[list[UUID]] = UNSET
    check_keys: list[str]
    overwrite: bool = True


class QaRunCreateRequestDict(TypedDict):
    trace_ids: NotRequired[list[UUID]]
    task_ids: NotRequired[list[UUID]]
    check_keys: list[str]
    overwrite: NotRequired[bool]
