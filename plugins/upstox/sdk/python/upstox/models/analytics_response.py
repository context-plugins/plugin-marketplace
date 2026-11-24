from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class AnalyticsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[Any] = UNSET


class AnalyticsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[Any]
