from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HeartbeatCreate(SdkBaseModel):
    name: str
    period: int
    """Expected interval in seconds."""

    grace: Optional[int] = UNSET
    """Grace period in seconds."""

    call: Optional[bool] = UNSET
    sms: Optional[bool] = UNSET
    email: Optional[bool] = UNSET
    push: Optional[bool] = UNSET
    team_wait: Optional[int] = UNSET
    paused: Optional[bool] = UNSET
    policy_id: Optional[str] = UNSET


class HeartbeatCreateDict(TypedDict):
    name: str
    period: int
    grace: NotRequired[int]
    call: NotRequired[bool]
    sms: NotRequired[bool]
    email: NotRequired[bool]
    push: NotRequired[bool]
    team_wait: NotRequired[int]
    paused: NotRequired[bool]
    policy_id: NotRequired[str]
