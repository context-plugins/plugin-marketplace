from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Task(SdkBaseModel):
    """A Task on a Story."""

    model_config = ConfigDict(extra="forbid")

    description: str
    """Full text of the Task."""

    entity_type: str
    """A string description of this resource."""

    story_id: int
    """The unique identifier of the parent Story."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    member_mention_ids: list[UUID]
    """An array of UUIDs of Members mentioned in this Task."""

    completed_at: RFC3339DateTime | None
    """The time/date the Task was completed."""

    global_id: str
    updated_at: RFC3339DateTime | None
    """The time/date the Task was updated."""

    group_mention_ids: list[UUID]
    """An array of UUIDs of Groups mentioned in this Task."""

    owner_ids: list[UUID]
    """An array of UUIDs of the Owners of this Task."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID
    in the other tool can be indicated here."""

    id: int
    """The unique ID of the Task."""

    position: int
    """The number corresponding to the Task's position within a list of Tasks on a Story."""

    complete: bool
    """True/false boolean indicating whether the Task has been completed."""

    created_at: RFC3339DateTime
    """The time/date the Task was created."""


class TaskDict(TypedDict):
    description: str
    entity_type: str
    story_id: int
    mention_ids: list[UUID]
    member_mention_ids: list[UUID]
    completed_at: RFC3339DateTime | None
    global_id: str
    updated_at: RFC3339DateTime | None
    group_mention_ids: list[UUID]
    owner_ids: list[UUID]
    external_id: str | None
    id: int
    position: int
    complete: bool
    created_at: RFC3339DateTime
