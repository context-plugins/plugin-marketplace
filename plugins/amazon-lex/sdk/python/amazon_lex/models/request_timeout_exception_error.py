from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestTimeoutExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class RequestTimeoutExceptionErrorDict(TypedDict):
    message: NotRequired[str]
