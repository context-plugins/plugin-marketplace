from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.card_aging_mode import CardAgingModeOrStr
from .enums.color_key_shortcut_groups_api import ColorKeyShortcutGroupsApiOrStr


class CreateGroup(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The description of the Group."""

    card_aging_mode: OptionalNullable[CardAgingModeOrStr] = UNSET
    """The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or
    "off" (explicitly disabled for this Group). Set to null to inherit the Workspace default."""

    color: Optional[str] = UNSET
    """The color you wish to use for the Group in the system."""

    card_aging_threshold_days: OptionalNullable[int] = UNSET
    """The number of days an in-progress Story can go without activity before it is considered stale. Required when
    card_aging_mode is "immediate"; not allowed otherwise."""

    display_icon_id: Optional[UUID] = UNSET
    """The Icon id for the avatar of this Group."""

    mention_name: str
    """The mention name of this Group."""

    name: str
    """The name of this Group."""

    color_key: Optional[ColorKeyShortcutGroupsApiOrStr] = UNSET
    """The color key you wish to use for the Group in the system."""

    member_ids: Optional[list[UUID]] = UNSET
    """The Member ids to add to this Group."""

    workflow_ids: Optional[list[int]] = UNSET
    """The Workflow ids to add to the Group."""


class CreateGroupDict(TypedDict):
    description: NotRequired[str]
    card_aging_mode: NotRequired[CardAgingModeOrStr | None]
    color: NotRequired[str]
    card_aging_threshold_days: NotRequired[int | None]
    display_icon_id: NotRequired[UUID]
    mention_name: str
    name: str
    color_key: NotRequired[ColorKeyShortcutGroupsApiOrStr]
    member_ids: NotRequired[list[UUID]]
    workflow_ids: NotRequired[list[int]]
