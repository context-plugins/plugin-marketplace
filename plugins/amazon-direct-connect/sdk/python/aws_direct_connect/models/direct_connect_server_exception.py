from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DirectConnectServerException(SdkBaseModel):
    message: Optional[str] = UNSET


class DirectConnectServerExceptionDict(TypedDict):
    message: NotRequired[str]
