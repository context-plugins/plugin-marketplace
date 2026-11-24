from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RedirectQrCodeRequest(SdkBaseModel):
    """Request to redirect a QRCode"""

    long_url: str


class RedirectQrCodeRequestDict(TypedDict):
    long_url: str
