from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_or_update_devices_request_device_for_request import (
    CreateOrUpdateDevicesRequestDeviceForRequest,
    CreateOrUpdateDevicesRequestDeviceForRequestDict,
)


class V1CreateOrUpdateDevicesRequest(SdkBaseModel):
    devices: Optional[list[CreateOrUpdateDevicesRequestDeviceForRequest]] = UNSET


class V1CreateOrUpdateDevicesRequestDict(TypedDict):
    devices: NotRequired[list[CreateOrUpdateDevicesRequestDeviceForRequestDict]]
