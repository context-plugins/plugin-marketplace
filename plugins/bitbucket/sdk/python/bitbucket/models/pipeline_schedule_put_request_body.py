from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineSchedulePutRequestBody(SdkBaseModel):
    """All Of object, pipeline_schedule_put_request_body."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    enabled: Optional[bool] = UNSET
    """Whether the schedule is enabled."""


class PipelineSchedulePutRequestBodyDict(TypedDict):
    type_: NotRequired[str]
    enabled: NotRequired[bool]
