from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state2 import State2OrStr
from .enums.substate import SubstateOrStr


class ClusterStatus1(SdkBaseModel):
    """Output only. Cluster status."""

    detail: Optional[str] = UNSET
    """Optional. Details of cluster's state."""

    substate: Optional[SubstateOrStr] = UNSET
    """Output only. Additional state information that includes status reported by the agent."""

    state: Optional[State2OrStr] = UNSET
    """Output only. The cluster's state."""

    state_start_time: Optional[str] = Field(default=UNSET, alias="stateStartTime")
    """Output only. Time when this state was entered (see JSON representation of Timestamp
    (https://developers.google.com/protocol-buffers/docs/proto3#json))."""


class ClusterStatus1Dict(TypedDict):
    detail: NotRequired[str]
    substate: NotRequired[SubstateOrStr]
    state: NotRequired[State2OrStr]
    state_start_time: NotRequired[str]
