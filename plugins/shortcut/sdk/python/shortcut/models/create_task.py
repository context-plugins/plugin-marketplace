from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateTask(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: str
    """The Task description."""

    complete: Optional[bool] = UNSET
    """True/false boolean indicating whether the Task is completed. Defaults to false."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any members you want to add as Owners on this new Task."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID
    in the other tool can be indicated here."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Defaults to the time/date the Task is created but can be set to reflect another creation time/date."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date."""


class CreateTaskDict(TypedDict):
    description: str
    complete: NotRequired[bool]
    owner_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
