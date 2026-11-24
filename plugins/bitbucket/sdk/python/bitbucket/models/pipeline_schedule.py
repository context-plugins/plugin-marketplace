from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .pipeline_ref_target1 import PipelineRefTarget1, PipelineRefTarget1Dict


class PipelineSchedule(SdkBaseModel):
    """All Of object, pipeline_schedule."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the schedule."""

    enabled: Optional[bool] = UNSET
    """Whether the schedule is enabled."""

    target: Optional[PipelineRefTarget1] = UNSET
    """The target on which the schedule will be executed."""

    cron_pattern: Optional[str] = UNSET
    """The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0
    12 * * ? *, will execute at 12pm UTC every day."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the schedule was created."""

    updated_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the schedule was updated."""


class PipelineScheduleDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    enabled: NotRequired[bool]
    target: NotRequired[PipelineRefTarget1Dict]
    cron_pattern: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
