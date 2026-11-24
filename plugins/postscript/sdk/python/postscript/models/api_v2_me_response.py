from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2MeResponse(SdkBaseModel):
    resource_id: Optional[str] = UNSET
    resource_name: Optional[str] = UNSET
    resource_type: Optional[str] = UNSET


class ApiV2MeResponseDict(TypedDict):
    resource_id: NotRequired[str]
    resource_name: NotRequired[str]
    resource_type: NotRequired[str]
