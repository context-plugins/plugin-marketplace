from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict
from .unions.id import Id, IdDict


class JsonRpcResponse(SdkBaseModel):
    jsonrpc: str
    id: Id | None
    result: Optional[Any] = UNSET
    error: Optional[Error] = UNSET


class JsonRpcResponseDict(TypedDict):
    jsonrpc: str
    id: IdDict | None
    result: NotRequired[Any]
    error: NotRequired[ErrorDict]
