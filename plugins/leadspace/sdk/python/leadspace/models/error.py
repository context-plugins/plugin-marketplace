from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    error: Optional[str] = UNSET
    tracking_id: Optional[str] = UNSET
    request_timestamp: Optional[str] = UNSET
    details: Optional[str] = UNSET


class ErrorDict(TypedDict):
    error: NotRequired[str]
    tracking_id: NotRequired[str]
    request_timestamp: NotRequired[str]
    details: NotRequired[str]
