from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Response(SdkBaseModel):
    name: Optional[str] = UNSET
    version: Optional[str] = UNSET
    status: Optional[str] = UNSET
    docs: Optional[str] = UNSET


class ResponseDict(TypedDict):
    name: NotRequired[str]
    version: NotRequired[str]
    status: NotRequired[str]
    docs: NotRequired[str]
