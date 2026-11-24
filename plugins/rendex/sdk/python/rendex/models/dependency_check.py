from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_rendex_rendering_health_api import StatusRendexRenderingHealthApiOrStr


class DependencyCheck(SdkBaseModel):
    status: Optional[StatusRendexRenderingHealthApiOrStr] = UNSET
    latency_ms: Optional[int] = Field(default=UNSET, alias="latencyMs")
    error: Optional[str] = UNSET


class DependencyCheckDict(TypedDict):
    status: NotRequired[StatusRendexRenderingHealthApiOrStr]
    latency_ms: NotRequired[int]
    error: NotRequired[str]
