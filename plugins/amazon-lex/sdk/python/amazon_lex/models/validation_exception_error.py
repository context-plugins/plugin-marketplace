from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidationExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ValidationExceptionErrorDict(TypedDict):
    message: NotRequired[str]
