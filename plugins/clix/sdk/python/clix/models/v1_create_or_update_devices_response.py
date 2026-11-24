from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_device import Clixexternalv1Device, Clixexternalv1DeviceDict


class V1CreateOrUpdateDevicesResponse(SdkBaseModel):
    devices: Optional[list[Clixexternalv1Device]] = UNSET


class V1CreateOrUpdateDevicesResponseDict(TypedDict):
    devices: NotRequired[list[Clixexternalv1DeviceDict]]
