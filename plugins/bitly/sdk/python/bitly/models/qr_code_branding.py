from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrCodeBranding(SdkBaseModel):
    bitly_brand: Optional[bool] = UNSET
    """A boolean that determines if the QR code should have the bitly brand in its bottom right corner"""


class QrCodeBrandingDict(TypedDict):
    bitly_brand: NotRequired[bool]
