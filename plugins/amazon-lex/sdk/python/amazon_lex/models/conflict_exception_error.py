from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConflictExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ConflictExceptionErrorDict(TypedDict):
    message: NotRequired[str]
