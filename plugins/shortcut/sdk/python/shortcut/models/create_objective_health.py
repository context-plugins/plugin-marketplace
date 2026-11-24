from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_shortcut_objectives_api import Status1ShortcutObjectivesApiOrStr


class CreateObjectiveHealth(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Status1ShortcutObjectivesApiOrStr
    """The health status of the Objective."""

    text: Optional[str] = UNSET
    """The description of the Health status."""


class CreateObjectiveHealthDict(TypedDict):
    status: Status1ShortcutObjectivesApiOrStr
    text: NotRequired[str]
