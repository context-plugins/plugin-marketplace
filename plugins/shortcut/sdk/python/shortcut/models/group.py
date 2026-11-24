from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.card_aging_mode1 import CardAgingMode1OrStr
from .enums.color_key1 import ColorKey1OrStr
from .icon import Icon, IconDict


class Group(SdkBaseModel):
    """A Group."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Group."""

    description: str
    """The description of the Group."""

    archived: bool
    """Whether or not the Group is archived."""

    entity_type: str
    """A string description of this resource."""

    card_aging_mode: CardAgingMode1OrStr | None
    """The card aging mode for stories in this Group: "gradual" or "immediate". Null if card aging is off."""

    color: str | None
    """The hex color to be displayed with the Group (for example, "#ff0000")."""

    card_aging_threshold_days: int | None
    """The number of days an in-progress Story can go without activity before it is considered stale."""

    num_stories_started: int
    """The number of stories assigned to the group which are in a started workflow state."""

    mention_name: str
    """The mention name of the Group."""

    name: str
    """The name of the Group."""

    global_id: str
    color_key: ColorKey1OrStr | None
    """The color key to be displayed with the Group."""

    num_stories: int
    """The total number of stories assigned to the group."""

    num_epics_started: int
    """The number of epics assigned to the group which are in the started workflow state."""

    updated_at: RFC3339DateTime
    """The last instant when this group was updated."""

    num_stories_backlog: int
    """The number of stories assigned to the group which are in a backlog workflow state."""

    id: UUID
    """The id of the Group."""

    display_icon: Icon
    """Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web
    application."""

    default_workflow_id: OptionalNullable[int] = UNSET
    """The ID of the default workflow for stories created in this group."""

    member_ids: list[UUID]
    """The Member IDs contain within the Group."""

    workflow_ids: list[int]
    """The Workflow IDs contained within the Group."""

    created_at: RFC3339DateTime
    """The instant when this group was created."""


class GroupDict(TypedDict):
    app_url: str
    description: str
    archived: bool
    entity_type: str
    card_aging_mode: CardAgingMode1OrStr | None
    color: str | None
    card_aging_threshold_days: int | None
    num_stories_started: int
    mention_name: str
    name: str
    global_id: str
    color_key: ColorKey1OrStr | None
    num_stories: int
    num_epics_started: int
    updated_at: RFC3339DateTime
    num_stories_backlog: int
    id: UUID
    display_icon: IconDict
    default_workflow_id: NotRequired[int | None]
    member_ids: list[UUID]
    workflow_ids: list[int]
    created_at: RFC3339DateTime
