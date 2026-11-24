from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class LinkError(SdkBaseModel):
    link: Optional[Any] = UNSET
    """The link that caused the error."""

    error: str
    """The error message."""

    code: CodeOrStr
    """The error code."""


class LinkErrorDict(TypedDict):
    link: NotRequired[Any]
    error: str
    code: CodeOrStr
