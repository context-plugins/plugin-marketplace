from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateTask(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The Task's description."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the owners of this story."""

    complete: Optional[bool] = UNSET
    """A true/false boolean indicating whether the task is complete."""

    before_id: Optional[int] = UNSET
    """Move task before this task ID."""

    after_id: Optional[int] = UNSET
    """Move task after this task ID."""


class UpdateTaskDict(TypedDict):
    description: NotRequired[str]
    owner_ids: NotRequired[list[UUID]]
    complete: NotRequired[bool]
    before_id: NotRequired[int]
    after_id: NotRequired[int]
