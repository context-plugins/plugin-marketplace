from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.stage import StageOrStr


class CompassLifecycleEventInputPropertiesDto(SdkBaseModel):
    """The list of properties of the lifecycle event."""

    id: str
    """The ID of the lifecycle."""

    stage: StageOrStr
    """The stage of the lifecycle event."""


class CompassLifecycleEventInputPropertiesDtoDict(TypedDict):
    id: str
    stage: StageOrStr
