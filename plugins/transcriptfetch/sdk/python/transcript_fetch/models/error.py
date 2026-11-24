from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class Error(SdkBaseModel):
    code: CodeOrStr
    message: str
    issues: Optional[list[Any]] = UNSET
    """Field-level validation problems, when applicable."""


class ErrorDict(TypedDict):
    code: CodeOrStr
    message: str
    issues: NotRequired[list[Any]]
