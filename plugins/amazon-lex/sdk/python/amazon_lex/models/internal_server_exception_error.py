from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InternalServerExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class InternalServerExceptionErrorDict(TypedDict):
    message: NotRequired[str]
