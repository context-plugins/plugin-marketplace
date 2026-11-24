from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DirectConnectClientException(SdkBaseModel):
    message: Optional[str] = UNSET


class DirectConnectClientExceptionDict(TypedDict):
    message: NotRequired[str]
