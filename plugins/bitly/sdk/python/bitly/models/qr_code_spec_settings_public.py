from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrCodeSpecSettingsPublic(SdkBaseModel):
    """The QR code's editable spec settings, which for now is just the error correction"""

    error_correction: Optional[int] = UNSET
    """The amount of error correction that the QR code was generated with"""


class QrCodeSpecSettingsPublicDict(TypedDict):
    error_correction: NotRequired[int]
