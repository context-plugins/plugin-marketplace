from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccessDeniedExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class AccessDeniedExceptionErrorDict(TypedDict):
    message: NotRequired[str]
