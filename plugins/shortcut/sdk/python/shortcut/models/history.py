from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.action1 import Action1, Action1Dict
from .unions.primary_id import PrimaryId, PrimaryIdDict
from .unions.reference import Reference, ReferenceDict


class History(SdkBaseModel):
    """A history item is a group of actions that represent a transactional change to a Story."""

    model_config = ConfigDict(extra="forbid")

    actor_name: Optional[str] = UNSET
    """The name of the actor that performed the action, if it can be determined."""

    changed_at: str
    """The date when the change occurred."""

    primary_id: Optional[PrimaryId] = UNSET
    """The ID of the primary entity that has changed, if applicable."""

    references: Optional[list[Reference]] = UNSET
    """An array of objects affected by the change. Reference objects provide basic information for the entities
    reference in the history actions. Some have specific fields, but they always contain an id, entity_type, and a
    name."""

    actions: list[Action1]
    """An array of actions that were performed for the change."""

    member_id: Optional[UUID] = UNSET
    """The ID of the member who performed the change."""

    external_id: Optional[str] = UNSET
    """The ID of the webhook that handled the change."""

    id: UUID
    """The ID representing the change for the story."""

    version: Literal["v1"] = "v1"
    """The version of the change format."""

    webhook_id: OptionalNullable[str] = UNSET
    """The ID of the webhook that handled the change."""

    automation_id: Optional[UUID] = UNSET
    """The ID of the automation that performed the change."""


class HistoryDict(TypedDict):
    actor_name: NotRequired[str]
    changed_at: str
    primary_id: NotRequired[PrimaryIdDict]
    references: NotRequired[list[ReferenceDict]]
    actions: list[Action1Dict]
    member_id: NotRequired[UUID]
    external_id: NotRequired[str]
    id: UUID
    version: Literal["v1"]
    webhook_id: NotRequired[str | None]
    automation_id: NotRequired[UUID]
