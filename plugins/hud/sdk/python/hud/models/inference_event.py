from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class InferenceEvent(SdkBaseModel):
    """One robot inference (``step.inference`` under ``hud.robot.step.v1``).

    Carries the ``[T, A]`` action chunk the policy produced at a re-infer ``tick``.

    Emitted only on re-infer ticks (a chunk boundary), so it marks the decision points the viewer renders on its episode
    slider. ``tick`` matches the paired :class:``ObservationEvent``."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["robot_inference"] = "robot_inference"
    tick: int = 0
    chunk: Optional[list[list[float]]] = UNSET
    chunk_length: int = 1
    names: Optional[list[str]] = UNSET


class InferenceEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["robot_inference"]
    tick: NotRequired[int]
    chunk: NotRequired[list[list[float]]]
    chunk_length: NotRequired[int]
    names: NotRequired[list[str]]
