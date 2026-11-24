from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LimitExceededExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class LimitExceededExceptionErrorDict(TypedDict):
    message: NotRequired[str]
