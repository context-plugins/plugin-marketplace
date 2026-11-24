from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Response(SdkBaseModel):
    success: Optional[bool] = UNSET
    deleted_id: Optional[str] = UNSET


class ResponseDict(TypedDict):
    success: NotRequired[bool]
    deleted_id: NotRequired[str]
