from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PreconditionFailedExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class PreconditionFailedExceptionErrorDict(TypedDict):
    message: NotRequired[str]
