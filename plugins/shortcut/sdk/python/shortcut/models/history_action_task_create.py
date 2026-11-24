from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoryActionTaskCreate(SdkBaseModel):
    """An action representing a Task being created."""

    description: str
    """The description of the Task."""

    entity_type: str
    """The type of entity referenced."""

    mention_ids: Optional[list[UUID]] = UNSET
    """An array of Member IDs that represent who has been mentioned in the Task."""

    group_mention_ids: Optional[list[UUID]] = UNSET
    """An array of Groups IDs that represent which have been mentioned in the Task."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of Member IDs that represent the Task's owners."""

    id: int
    """The ID of the entity referenced."""

    action: Literal["create"] = "create"
    """The action of the entity referenced."""

    complete: bool
    """Whether or not the Task is complete."""

    deadline: Optional[str] = UNSET
    """A timestamp that represent's the Task's deadline."""


class HistoryActionTaskCreateDict(TypedDict):
    description: str
    entity_type: str
    mention_ids: NotRequired[list[UUID]]
    group_mention_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    id: int
    action: Literal["create"]
    complete: bool
    deadline: NotRequired[str]
