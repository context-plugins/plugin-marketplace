from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkConnectSessionInfo1(SdkBaseModel):
    """Spark Connect Session Info"""

    start_timestamp: Optional[str] = Field(default=UNSET, alias="startTimestamp")
    """Timestamp when the session started."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """Required. Session ID of the session."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """User ID of the user who started the session."""

    total_execution: Optional[str] = Field(default=UNSET, alias="totalExecution")
    """Optional. Total number of executions in the session."""

    finish_timestamp: Optional[str] = Field(default=UNSET, alias="finishTimestamp")
    """Timestamp when the session finished."""


class SparkConnectSessionInfo1Dict(TypedDict):
    start_timestamp: NotRequired[str]
    session_id: NotRequired[str]
    user_id: NotRequired[str]
    total_execution: NotRequired[str]
    finish_timestamp: NotRequired[str]
