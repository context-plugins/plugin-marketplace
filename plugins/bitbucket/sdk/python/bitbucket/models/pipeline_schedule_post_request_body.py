from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .target import Target, TargetDict


class PipelineSchedulePostRequestBody(SdkBaseModel):
    """All Of object, pipeline_schedule_post_request_body."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    target: Target
    """The target on which the schedule will be executed."""

    enabled: Optional[bool] = UNSET
    """Whether the schedule is enabled."""

    cron_pattern: str
    """The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0
    12 * * ? *, will execute at 12pm UTC every day."""


class PipelineSchedulePostRequestBodyDict(TypedDict):
    type_: NotRequired[str]
    target: TargetDict
    enabled: NotRequired[bool]
    cron_pattern: str
