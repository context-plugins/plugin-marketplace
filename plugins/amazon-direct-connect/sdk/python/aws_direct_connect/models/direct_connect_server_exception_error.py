from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DirectConnectServerExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class DirectConnectServerExceptionErrorDict(TypedDict):
    message: NotRequired[str]
