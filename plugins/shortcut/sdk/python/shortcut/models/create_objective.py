from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .create_category_params import CreateCategoryParams, CreateCategoryParamsDict
from .enums.state_shortcut_objectives_api import StateShortcutObjectivesApiOrStr


class CreateObjective(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the Objective."""

    description: Optional[str] = UNSET
    """The Objective's description."""

    state: Optional[StateShortcutObjectivesApiOrStr] = UNSET
    """The workflow state that the Objective is in."""

    started_at_override: Optional[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Objective was started."""

    completed_at_override: Optional[RFC3339DateTime] = UNSET
    """A manual override for the time/date the Objective was completed."""

    categories: Optional[list[CreateCategoryParams]] = UNSET
    """An array of IDs of Categories attached to the Objective."""


class CreateObjectiveDict(TypedDict):
    name: str
    description: NotRequired[str]
    state: NotRequired[StateShortcutObjectivesApiOrStr]
    started_at_override: NotRequired[RFC3339DateTime]
    completed_at_override: NotRequired[RFC3339DateTime]
    categories: NotRequired[list[CreateCategoryParamsDict]]
