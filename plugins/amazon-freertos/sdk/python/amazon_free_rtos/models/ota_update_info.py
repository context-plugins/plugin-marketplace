from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ota_update import OtaUpdate, OtaUpdateDict


class OtaUpdateInfo(SdkBaseModel):
    """Detailed information about an OTA update."""

    ota_update_info: Optional[OtaUpdate] = Field(default=UNSET, alias="otaUpdateInfo")
    """An over-the-air (OTA) firmware update job for FreeRTOS devices."""


class OtaUpdateInfoDict(TypedDict):
    ota_update_info: NotRequired[OtaUpdateDict]
