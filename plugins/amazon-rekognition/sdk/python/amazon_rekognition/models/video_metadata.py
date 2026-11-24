from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.color_range import ColorRangeOrStr


class VideoMetadata(SdkBaseModel):
    codec: Optional[str] = Field(default=UNSET, alias="Codec")
    """Type of compression used in the analyzed video."""

    duration_millis: Optional[int] = Field(default=UNSET, alias="DurationMillis")
    """Length of the video in milliseconds."""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """Format of the analyzed video. Possible values are MP4, MOV and AVI."""

    frame_rate: Optional[float] = Field(default=UNSET, alias="FrameRate")
    """Number of frames per second in the video."""

    frame_height: Optional[int] = Field(default=UNSET, alias="FrameHeight")
    """Vertical pixel dimension of the video."""

    frame_width: Optional[int] = Field(default=UNSET, alias="FrameWidth")
    """Horizontal pixel dimension of the video."""

    color_range: Optional[ColorRangeOrStr] = Field(default=UNSET, alias="ColorRange")
    """A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255)."""


class VideoMetadataDict(TypedDict):
    codec: NotRequired[str]
    duration_millis: NotRequired[int]
    format: NotRequired[str]
    frame_rate: NotRequired[float]
    frame_height: NotRequired[int]
    frame_width: NotRequired[int]
    color_range: NotRequired[ColorRangeOrStr]
