from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotFoundExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class NotFoundExceptionErrorDict(TypedDict):
    message: NotRequired[str]
