from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EyeDirection(SdkBaseModel):
    yaw: Optional[float] = Field(default=UNSET, alias="Yaw")
    """Value representing eye direction on the yaw axis."""

    pitch: Optional[float] = Field(default=UNSET, alias="Pitch")
    """Value representing eye direction on the pitch axis."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that the service has in its predicted eye direction."""


class EyeDirectionDict(TypedDict):
    yaw: NotRequired[float]
    pitch: NotRequired[float]
    confidence: NotRequired[float]
