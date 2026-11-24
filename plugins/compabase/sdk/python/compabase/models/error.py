from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class Error(SdkBaseModel):
    """Structured domain error (used by 400/404/429 responses)."""

    code: Optional[CodeOrStr] = UNSET
    """Machine-readable domain error code."""

    message: Optional[str] = UNSET
    details: Optional[Any] = UNSET


class ErrorDict(TypedDict):
    code: NotRequired[CodeOrStr]
    message: NotRequired[str]
    details: NotRequired[Any]
