from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state6 import State6OrStr


class StateHistory(SdkBaseModel):
    """Historical state information."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Details about the state at this point in history."""

    state: Optional[State6OrStr] = UNSET
    """Output only. The state of the batch at this point in history."""

    state_start_time: Optional[str] = Field(default=UNSET, alias="stateStartTime")
    """Output only. The time when the batch entered the historical state."""


class StateHistoryDict(TypedDict):
    state_message: NotRequired[str]
    state: NotRequired[State6OrStr]
    state_start_time: NotRequired[str]
