from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class StoryContentsTask(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: str
    """Full text of the Task."""

    position: Optional[int] = UNSET
    """The number corresponding to the Task's position within a list of Tasks on a Story."""

    complete: Optional[bool] = UNSET
    """True/false boolean indicating whether the Task has been completed."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs of the Owners of this Task."""

    external_id: OptionalNullable[str] = UNSET
    """This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID
    in the other tool can be indicated here."""


class StoryContentsTaskDict(TypedDict):
    description: str
    position: NotRequired[int]
    complete: NotRequired[bool]
    owner_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str | None]
