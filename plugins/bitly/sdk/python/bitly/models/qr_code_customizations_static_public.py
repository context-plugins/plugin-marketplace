from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.qr_code_dot_pattern_type import QrCodeDotPatternType, QrCodeDotPatternTypeOrStr
from .qr_code_branding import QrCodeBranding, QrCodeBrandingDict
from .qr_code_corners import QrCodeCorners, QrCodeCornersDict
from .qr_code_spec_settings_public import QrCodeSpecSettingsPublic, QrCodeSpecSettingsPublicDict


class QrCodeCustomizationsStaticPublic(SdkBaseModel):
    """Appearance options for a static QR code. gradient, background_gradient, frame, text, and logo are not
    supported."""

    background_color: Optional[str] = UNSET
    """The QR code's background color in hex code format with values for alpha channel"""

    dot_pattern_color: Optional[str] = UNSET
    """The QR code's dot pattern color in hex code format"""

    dot_pattern_type: QrCodeDotPatternTypeOrStr = QrCodeDotPatternType.STANDARD
    corners: Optional[QrCodeCorners] = UNSET
    """An object representing all three corners of the QR code. The corners corresponding to each property are: corner_1
    = top left, corner_2 = top right, and corner_3 = bottom right"""

    branding: Optional[QrCodeBranding] = UNSET
    spec_settings: Optional[QrCodeSpecSettingsPublic] = UNSET
    """The QR code's editable spec settings, which for now is just the error correction"""


class QrCodeCustomizationsStaticPublicDict(TypedDict):
    background_color: NotRequired[str]
    dot_pattern_color: NotRequired[str]
    dot_pattern_type: NotRequired[QrCodeDotPatternTypeOrStr]
    corners: NotRequired[QrCodeCornersDict]
    branding: NotRequired[QrCodeBrandingDict]
    spec_settings: NotRequired[QrCodeSpecSettingsPublicDict]
