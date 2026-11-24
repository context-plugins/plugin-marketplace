from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code1 import Code1OrStr


class Error1(SdkBaseModel):
    code: Code1OrStr
    message: str


class Error1Dict(TypedDict):
    code: Code1OrStr
    message: str
