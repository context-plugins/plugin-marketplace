from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicStaticQrCodeResponse(SdkBaseModel):
    """Response containing a generated static QR code image."""

    image: Optional[str] = UNSET
    """The image data, base64-encoded. Format is SVG or PNG depending on the requested format."""


class PublicStaticQrCodeResponseDict(TypedDict):
    image: NotRequired[str]
