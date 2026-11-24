from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class Error2(SdkBaseModel):
    code: CodeOrStr
    field: Optional[str] = UNSET
    message: str


class Error2Dict(TypedDict):
    code: CodeOrStr
    field: NotRequired[str]
    message: str
