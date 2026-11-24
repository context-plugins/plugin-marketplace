from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code import CodeOrStr


class Error2(SdkBaseModel):
    code: CodeOrStr
    message: str


class Error2Dict(TypedDict):
    code: CodeOrStr
    message: str
