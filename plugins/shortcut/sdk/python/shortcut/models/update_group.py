from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.card_aging_mode import CardAgingModeOrStr
from .enums.color_key_shortcut_groups_api import ColorKeyShortcutGroupsApiOrStr


class UpdateGroup(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of this Group."""

    archived: OptionalNullable[bool] = UNSET
    """Whether or not this Group is archived."""

    card_aging_mode: OptionalNullable[CardAgingModeOrStr] = UNSET
    """The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or
    "off" (explicitly disabled for this Group). Set to null to inherit the Workspace default."""

    color: OptionalNullable[str] = UNSET
    """The color you wish to use for the Group in the system."""

    card_aging_threshold_days: OptionalNullable[int] = UNSET
    """The number of days an in-progress Story can go without activity before it is considered stale. Required when
    card_aging_mode is "immediate"; not allowed otherwise."""

    display_icon_id: OptionalNullable[UUID] = UNSET
    """The Icon id for the avatar of this Group."""

    mention_name: Optional[str] = UNSET
    """The mention name of this Group."""

    name: Optional[str] = UNSET
    """The name of this Group."""

    color_key: Optional[ColorKeyShortcutGroupsApiOrStr] = UNSET
    """The color key you wish to use for the Group in the system."""

    default_workflow_id: OptionalNullable[int] = UNSET
    """The ID of the default workflow for stories created in this group."""

    member_ids: Optional[list[UUID]] = UNSET
    """The Member ids to add to this Group."""

    workflow_ids: Optional[list[int]] = UNSET
    """The Workflow ids to add to the Group."""


class UpdateGroupDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool | None]
    card_aging_mode: NotRequired[CardAgingModeOrStr | None]
    color: NotRequired[str | None]
    card_aging_threshold_days: NotRequired[int | None]
    display_icon_id: NotRequired[UUID | None]
    mention_name: NotRequired[str]
    name: NotRequired[str]
    color_key: NotRequired[ColorKeyShortcutGroupsApiOrStr]
    default_workflow_id: NotRequired[int | None]
    member_ids: NotRequired[list[UUID]]
    workflow_ids: NotRequired[list[int]]
