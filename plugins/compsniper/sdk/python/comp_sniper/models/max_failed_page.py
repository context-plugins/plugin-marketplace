from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code import CodeOrStr


class MaxFailedPage(SdkBaseModel):
    page: int
    code: CodeOrStr
    attempts: int


class MaxFailedPageDict(TypedDict):
    page: int
    code: CodeOrStr
    attempts: int
