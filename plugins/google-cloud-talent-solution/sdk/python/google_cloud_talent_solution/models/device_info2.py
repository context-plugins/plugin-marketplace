from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.device_type import DeviceTypeOrStr


class DeviceInfo2(SdkBaseModel):
    """The type of device used by the job seeker at the time of the call to the service."""

    id: Optional[str] = UNSET
    """A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices."""

    device_type: Optional[DeviceTypeOrStr] = Field(default=UNSET, alias="deviceType")
    """Type of the device."""


class DeviceInfo2Dict(TypedDict):
    id: NotRequired[str]
    device_type: NotRequired[DeviceTypeOrStr]
