from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method import MethodOrStr
from .unions.id import Id, IdDict


class JsonRpcRequest(SdkBaseModel):
    jsonrpc: Literal["2.0"] = "2.0"
    id: Id
    method: MethodOrStr
    params: Optional[list[Any]] = UNSET


class JsonRpcRequestDict(TypedDict):
    jsonrpc: Literal["2.0"]
    id: IdDict
    method: MethodOrStr
    params: NotRequired[list[Any]]
