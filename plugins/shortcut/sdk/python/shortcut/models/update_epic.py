from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_label_params import CreateLabelParams, CreateLabelParamsDict
from .enums.state import StateOrStr


class UpdateEpic(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The Epic's description."""

    archived: Optional[bool] = UNSET
    """A true/false boolean indicating whether the Epic is in archived state."""

    labels: Optional[list[CreateLabelParams]] = UNSET
    """An array of Labels attached to the Epic."""

    completed_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Epic was completed."""

    objective_ids: Optional[list[int]] = UNSET
    """An array of IDs for Objectives to which this Epic is related."""

    name: Optional[str] = UNSET
    """The Epic's name."""

    planned_start_date: OptionalNullable[RFC3339DateTime] = UNSET
    """The Epic's planned start date."""

    state: Optional[StateOrStr] = UNSET
    """``Deprecated`` The Epic's state (to do, in progress, or done); will be ignored when ``epic_state_id`` is set."""

    milestone_id: OptionalNullable[int] = UNSET
    """``Deprecated`` The ID of the Milestone this Epic is related to. Use ``objective_ids``."""

    requested_by_id: Optional[UUID] = UNSET
    """The ID of the member that requested the epic."""

    epic_state_id: Optional[int] = UNSET
    """The ID of the Epic State."""

    started_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Epic was started."""

    group_id: OptionalNullable[UUID] = UNSET
    """``Deprecated`` The ID of the group to associate with the epic. Use ``group_ids``."""

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Members you want to add as Followers on this Epic."""

    group_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDS for Groups to which this Epic is related."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any members you want to add as Owners on this Epic."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID
    in the other tool can be indicated here."""

    before_id: Optional[int] = UNSET
    """The ID of the Epic we want to move this Epic before."""

    after_id: Optional[int] = UNSET
    """The ID of the Epic we want to move this Epic after."""

    deadline: OptionalNullable[RFC3339DateTime] = UNSET
    """The Epic's deadline."""


class UpdateEpicDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool]
    labels: NotRequired[list[CreateLabelParamsDict]]
    completed_at_override: NotRequired[RFC3339DateTime | None]
    objective_ids: NotRequired[list[int]]
    name: NotRequired[str]
    planned_start_date: NotRequired[RFC3339DateTime | None]
    state: NotRequired[StateOrStr]
    milestone_id: NotRequired[int | None]
    requested_by_id: NotRequired[UUID]
    epic_state_id: NotRequired[int]
    started_at_override: NotRequired[RFC3339DateTime | None]
    group_id: NotRequired[UUID | None]
    follower_ids: NotRequired[list[UUID]]
    group_ids: NotRequired[list[UUID]]
    owner_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str]
    before_id: NotRequired[int]
    after_id: NotRequired[int]
    deadline: NotRequired[RFC3339DateTime | None]
