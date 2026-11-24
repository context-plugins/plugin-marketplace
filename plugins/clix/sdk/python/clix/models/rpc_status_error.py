from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .protobuf_any import ProtobufAny, ProtobufAnyDict


class RpcStatusError(SdkBaseModel):
    code: Optional[int] = UNSET
    message: Optional[str] = UNSET
    details: Optional[list[ProtobufAny]] = UNSET


class RpcStatusErrorDict(TypedDict):
    code: NotRequired[int]
    message: NotRequired[str]
    details: NotRequired[list[ProtobufAnyDict]]
