from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateSubTaskParams(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the SubTask."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the owners of this story."""

    workflow_state_id: Optional[int] = UNSET
    """The ID of the workflow state the story will be in."""


class CreateSubTaskParamsDict(TypedDict):
    name: str
    owner_ids: NotRequired[list[UUID]]
    workflow_state_id: NotRequired[int]
