from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DirectConnectClientExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class DirectConnectClientExceptionErrorDict(TypedDict):
    message: NotRequired[str]
