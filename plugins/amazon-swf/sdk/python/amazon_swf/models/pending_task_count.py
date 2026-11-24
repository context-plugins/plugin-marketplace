from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PendingTaskCount(SdkBaseModel):
    count: int
    """The number of tasks in the task list."""

    truncated: Optional[bool] = UNSET
    """If set to true, indicates that the actual count was more than the maximum supported by this API and the count
    returned is the truncated value."""


class PendingTaskCountDict(TypedDict):
    count: int
    truncated: NotRequired[bool]
