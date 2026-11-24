from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class VideoSegmentEvent(SdkBaseModel):
    """One CMAF fragment of a camera's H.264 stream.

    Projected from ``step.video_segment`` under ``hud.robot.step.v1``: camera frames stream as video instead of a JPEG
    per tick.

    ``index`` orders the fragments per ``camera`` (``index`` 0 is the init segment); the viewer feeds the ordered
    ``url``s to one ``<video>`` via MSE. ``fps`` maps a control tick onto video time. ``url`` is the presigned S3
    segment (``None`` only if offload/presign hasn't completed)."""

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["robot_video_segment"] = "robot_video_segment"
    camera: str = ""
    index: int = 0
    fps: int = 10
    url: Optional[str] = UNSET


class VideoSegmentEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["robot_video_segment"]
    camera: NotRequired[str]
    index: NotRequired[int]
    fps: NotRequired[int]
    url: NotRequired[str]
