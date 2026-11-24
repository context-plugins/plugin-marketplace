from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pose(SdkBaseModel):
    roll: Optional[float] = Field(default=UNSET, alias="Roll")
    """Value representing the face rotation on the roll axis."""

    yaw: Optional[float] = Field(default=UNSET, alias="Yaw")
    """Value representing the face rotation on the yaw axis."""

    pitch: Optional[float] = Field(default=UNSET, alias="Pitch")
    """Value representing the face rotation on the pitch axis."""


class PoseDict(TypedDict):
    roll: NotRequired[float]
    yaw: NotRequired[float]
    pitch: NotRequired[float]
