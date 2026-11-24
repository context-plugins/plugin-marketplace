from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1SetProjectUserIdForDeviceResponse(SdkBaseModel):
    device_id: Optional[str] = UNSET
    project_user_id: Optional[str] = UNSET


class V1SetProjectUserIdForDeviceResponseDict(TypedDict):
    device_id: NotRequired[str]
    project_user_id: NotRequired[str]
