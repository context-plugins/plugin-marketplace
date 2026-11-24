from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class QrCodeError(SdkBaseModel):
    qrcode: Optional[Any] = UNSET
    """The QR Code that caused the error."""

    error: str
    """The error message."""

    code: CodeOrStr
    """The error code."""


class QrCodeErrorDict(TypedDict):
    qrcode: NotRequired[Any]
    error: str
    code: CodeOrStr
