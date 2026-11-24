from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FlowCheck(SdkBaseModel):
    success: Optional[bool] = UNSET
    status_code: Optional[int] = Field(default=UNSET, alias="statusCode")
    duration_ms: Optional[int] = Field(default=UNSET, alias="durationMs")


class FlowCheckDict(TypedDict):
    success: NotRequired[bool]
    status_code: NotRequired[int]
    duration_ms: NotRequired[int]
