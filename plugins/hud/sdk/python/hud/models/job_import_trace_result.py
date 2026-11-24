from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_hud_platform_jobs_api import StatusHudPlatformJobsApiOrStr


class JobImportTraceResult(SdkBaseModel):
    """Outcome of one imported run.

    In ``error`` and ``evaluation_result``, characters Postgres cannot store become U+FFFD and non-finite numbers become
    null. A non-finite ``reward`` is refused."""

    status: StatusHudPlatformJobsApiOrStr
    reward: Optional[float] = UNSET
    evaluation_result: Optional[Any] = UNSET
    error: Optional[str] = UNSET
    start_time: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET


class JobImportTraceResultDict(TypedDict):
    status: StatusHudPlatformJobsApiOrStr
    reward: NotRequired[float]
    evaluation_result: NotRequired[Any]
    error: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
