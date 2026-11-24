from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApplicationAttemptInfo(SdkBaseModel):
    """Specific attempt of an application."""

    duration_millis: Optional[str] = Field(default=UNSET, alias="durationMillis")
    attempt_id: Optional[str] = Field(default=UNSET, alias="attemptId")
    last_updated: Optional[str] = Field(default=UNSET, alias="lastUpdated")
    completed: Optional[bool] = UNSET
    app_spark_version: Optional[str] = Field(default=UNSET, alias="appSparkVersion")
    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    spark_user: Optional[str] = Field(default=UNSET, alias="sparkUser")
    event_log_path: Optional[str] = Field(default=UNSET, alias="eventLogPath")
    """Output only. The event log path for the application attempt."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")


class ApplicationAttemptInfoDict(TypedDict):
    duration_millis: NotRequired[str]
    attempt_id: NotRequired[str]
    last_updated: NotRequired[str]
    completed: NotRequired[bool]
    app_spark_version: NotRequired[str]
    start_time: NotRequired[str]
    spark_user: NotRequired[str]
    event_log_path: NotRequired[str]
    end_time: NotRequired[str]
