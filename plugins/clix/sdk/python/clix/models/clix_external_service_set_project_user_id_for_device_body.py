from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClixExternalServiceSetProjectUserIdForDeviceBody(SdkBaseModel):
    project_user_id: Optional[str] = UNSET


class ClixExternalServiceSetProjectUserIdForDeviceBodyDict(TypedDict):
    project_user_id: NotRequired[str]
