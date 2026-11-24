from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state1 import State1OrStr


class SessionStateHistory(SdkBaseModel):
    """Historical state information."""

    state_start_time: Optional[str] = Field(default=UNSET, alias="stateStartTime")
    """Output only. The time when the session entered the historical state."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Details about the state at this point in the session history."""

    state: Optional[State1OrStr] = UNSET
    """Output only. The state of the session at this point in the session history."""


class SessionStateHistoryDict(TypedDict):
    state_start_time: NotRequired[str]
    state_message: NotRequired[str]
    state: NotRequired[State1OrStr]
