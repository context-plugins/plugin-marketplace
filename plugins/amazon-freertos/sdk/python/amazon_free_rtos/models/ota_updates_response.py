from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ota_update_summary import OtaUpdateSummary, OtaUpdateSummaryDict


class OtaUpdatesResponse(SdkBaseModel):
    ota_updates: Optional[list[OtaUpdateSummary]] = Field(default=UNSET, alias="otaUpdates")
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")


class OtaUpdatesResponseDict(TypedDict):
    ota_updates: NotRequired[list[OtaUpdateSummaryDict]]
    next_token: NotRequired[str]
