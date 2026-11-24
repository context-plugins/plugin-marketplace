from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage_row import UsageRow, UsageRowDict


class V1UsageResponse(SdkBaseModel):
    data: Optional[list[UsageRow]] = UNSET
    request_id: Optional[str] = UNSET


class V1UsageResponseDict(TypedDict):
    data: NotRequired[list[UsageRowDict]]
    request_id: NotRequired[str]
