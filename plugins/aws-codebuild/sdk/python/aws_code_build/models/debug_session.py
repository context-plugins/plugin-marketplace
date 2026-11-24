from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DebugSession(SdkBaseModel):
    session_enabled: Optional[bool] = Field(default=UNSET, alias="sessionEnabled")
    """Specifies if session debugging is enabled for this build."""

    session_target: Optional[str] = Field(default=UNSET, alias="sessionTarget")
    """Contains the identifier of the Session Manager session used for the build. To work with the paused build, you
    open this session to examine, control, and resume the build."""


class DebugSessionDict(TypedDict):
    session_enabled: NotRequired[bool]
    session_target: NotRequired[str]
