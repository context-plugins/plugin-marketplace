from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_category_params import CreateCategoryParams, CreateCategoryParamsDict
from .enums.state_shortcut_objectives_api import StateShortcutObjectivesApiOrStr


class UpdateObjective(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    description: Optional[str] = UNSET
    """The Objective's description."""

    archived: Optional[bool] = UNSET
    """A boolean indicating whether the Objective is archived or not"""

    completed_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Objective was completed."""

    name: Optional[str] = UNSET
    """The name of the Objective."""

    state: Optional[StateShortcutObjectivesApiOrStr] = UNSET
    """The workflow state that the Objective is in."""

    started_at_override: OptionalNullable[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Objective was started."""

    categories: Optional[list[CreateCategoryParams]] = UNSET
    """An array of IDs of Categories attached to the Objective."""

    before_id: Optional[int] = UNSET
    """The ID of the Objective we want to move this Objective before."""

    after_id: Optional[int] = UNSET
    """The ID of the Objective we want to move this Objective after."""


class UpdateObjectiveDict(TypedDict):
    description: NotRequired[str]
    archived: NotRequired[bool]
    completed_at_override: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str]
    state: NotRequired[StateShortcutObjectivesApiOrStr]
    started_at_override: NotRequired[RFC3339DateTime | None]
    categories: NotRequired[list[CreateCategoryParamsDict]]
    before_id: NotRequired[int]
    after_id: NotRequired[int]
