from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.device_type import DeviceTypeOrStr


class DeviceInfo(SdkBaseModel):
    """Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing
    this information improves the quality of the search results across devices."""

    id: Optional[str] = UNSET
    """A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices."""

    device_type: Optional[DeviceTypeOrStr] = Field(default=UNSET, alias="deviceType")
    """Type of the device."""


class DeviceInfoDict(TypedDict):
    id: NotRequired[str]
    device_type: NotRequired[DeviceTypeOrStr]
