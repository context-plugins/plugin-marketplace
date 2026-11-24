from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state3 import State3OrStr


class SparkConnectExecutionInfo(SdkBaseModel):
    """Represents the lifecycle and details of an Execution via Spark Connect"""

    spark_session_tags: Optional[list[str]] = Field(default=UNSET, alias="sparkSessionTags")
    """Optional. Tags associated with the Spark session."""

    state: Optional[State3OrStr] = UNSET
    """Output only. Current state of the execution."""

    statement: Optional[str] = UNSET
    """statement of the execution."""

    job_ids: Optional[list[str]] = Field(default=UNSET, alias="jobIds")
    """Optional. List of job ids associated with the execution."""

    close_timestamp: Optional[str] = Field(default=UNSET, alias="closeTimestamp")
    """Timestamp when the execution was closed."""

    start_timestamp: Optional[str] = Field(default=UNSET, alias="startTimestamp")
    """Timestamp when the execution started."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """Required. Session ID, ties the execution to a specific Spark Connect session."""

    finish_timestamp: Optional[str] = Field(default=UNSET, alias="finishTimestamp")
    """Timestamp when the execution finished."""

    detail: Optional[str] = UNSET
    """Detailed information about the execution."""

    user_id: Optional[str] = Field(default=UNSET, alias="userId")
    """User ID of the user who started the execution."""

    job_tag: Optional[str] = Field(default=UNSET, alias="jobTag")
    """Required. Job tag of the execution."""

    operation_id: Optional[str] = Field(default=UNSET, alias="operationId")
    """Unique identifier for the operation."""

    sql_exec_ids: Optional[list[str]] = Field(default=UNSET, alias="sqlExecIds")
    """Optional. List of sql execution ids associated with the execution."""


class SparkConnectExecutionInfoDict(TypedDict):
    spark_session_tags: NotRequired[list[str]]
    state: NotRequired[State3OrStr]
    statement: NotRequired[str]
    job_ids: NotRequired[list[str]]
    close_timestamp: NotRequired[str]
    start_timestamp: NotRequired[str]
    session_id: NotRequired[str]
    finish_timestamp: NotRequired[str]
    detail: NotRequired[str]
    user_id: NotRequired[str]
    job_tag: NotRequired[str]
    operation_id: NotRequired[str]
    sql_exec_ids: NotRequired[list[str]]
