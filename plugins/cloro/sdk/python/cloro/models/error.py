from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.code import CodeOrStr


class Error(SdkBaseModel):
    code: Optional[CodeOrStr] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class ErrorDict(TypedDict):
    code: NotRequired[CodeOrStr]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
