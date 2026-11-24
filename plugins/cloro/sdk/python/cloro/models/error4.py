from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.code3 import Code3OrStr


class Error4(SdkBaseModel):
    code: Optional[Code3OrStr] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error4Dict(TypedDict):
    code: NotRequired[Code3OrStr]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
