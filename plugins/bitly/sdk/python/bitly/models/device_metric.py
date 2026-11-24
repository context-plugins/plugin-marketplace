from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeviceMetric(SdkBaseModel):
    clicks: Optional[int] = UNSET
    device_type: Optional[str] = UNSET


class DeviceMetricDict(TypedDict):
    clicks: NotRequired[int]
    device_type: NotRequired[str]
