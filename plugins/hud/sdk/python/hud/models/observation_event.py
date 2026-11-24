from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .state_feature import StateFeature, StateFeatureDict


class ObservationEvent(SdkBaseModel):
    """One robot observation tick (``step.observation`` under ``hud.robot.step.v1``):

    the numeric state the policy saw at ``tick`` (camera frames travel as ``VideoSegmentEvent`` streams).

    ``state`` maps each env-contract feature group -> its :class:``StateFeature`` (per-dim names + values). Pairs with
    the :class:``InferenceEvent`` at the same ``tick``."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["robot_observation"] = "robot_observation"
    tick: int = 0
    state: Optional[dict[str, StateFeature]] = UNSET


class ObservationEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["robot_observation"]
    tick: NotRequired[int]
    state: NotRequired[dict[str, StateFeatureDict]]
