from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicQrCodeImageResponse(SdkBaseModel):
    """Wraps the image data for a QR code."""

    qr_code_image: Optional[str] = UNSET
    """The stringified data for the QR code's image"""


class PublicQrCodeImageResponseDict(TypedDict):
    qr_code_image: NotRequired[str]
