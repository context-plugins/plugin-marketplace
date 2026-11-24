from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1SchedulesRequest1(SdkBaseModel):
    recurrence: Optional[str] = UNSET
    enabled: Optional[bool] = UNSET


class ApiV1SchedulesRequest1Dict(TypedDict):
    recurrence: NotRequired[str]
    enabled: NotRequired[bool]
