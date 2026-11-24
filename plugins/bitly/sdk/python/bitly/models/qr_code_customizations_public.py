from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.qr_code_dot_pattern_type import QrCodeDotPatternType, QrCodeDotPatternTypeOrStr
from .qr_code_branding import QrCodeBranding, QrCodeBrandingDict
from .qr_code_corners import QrCodeCorners, QrCodeCornersDict
from .qr_code_frame_request import QrCodeFrameRequest, QrCodeFrameRequestDict
from .qr_code_gradient import QrCodeGradient, QrCodeGradientDict
from .qr_code_logo_public import QrCodeLogoPublic, QrCodeLogoPublicDict
from .qr_code_spec_settings_public import QrCodeSpecSettingsPublic, QrCodeSpecSettingsPublicDict
from .qr_code_text import QrCodeText, QrCodeTextDict


class QrCodeCustomizationsPublic(SdkBaseModel):
    """Options for customizing a QR Code's appearance"""

    background_color: Optional[str] = UNSET
    """The QR code's background color in hex code format with values for alpha channel"""

    dot_pattern_color: Optional[str] = UNSET
    """The QR code's dot pattern color in hex code format"""

    dot_pattern_type: QrCodeDotPatternTypeOrStr = QrCodeDotPatternType.STANDARD
    corners: Optional[QrCodeCorners] = UNSET
    """An object representing all three corners of the QR code. The corners corresponding to each property are: corner_1
    = top left, corner_2 = top right, and corner_3 = bottom right"""

    gradient: Optional[QrCodeGradient] = UNSET
    background_gradient: Optional[QrCodeGradient] = UNSET
    logo: Optional[QrCodeLogoPublic] = UNSET
    frame: Optional[QrCodeFrameRequest] = UNSET
    text: Optional[QrCodeText] = UNSET
    """Contains the center, top, and bottom text to be used in the QR code"""

    branding: Optional[QrCodeBranding] = UNSET
    spec_settings: Optional[QrCodeSpecSettingsPublic] = UNSET
    """The QR code's editable spec settings, which for now is just the error correction"""


class QrCodeCustomizationsPublicDict(TypedDict):
    background_color: NotRequired[str]
    dot_pattern_color: NotRequired[str]
    dot_pattern_type: NotRequired[QrCodeDotPatternTypeOrStr]
    corners: NotRequired[QrCodeCornersDict]
    gradient: NotRequired[QrCodeGradientDict]
    background_gradient: NotRequired[QrCodeGradientDict]
    logo: NotRequired[QrCodeLogoPublicDict]
    frame: NotRequired[QrCodeFrameRequestDict]
    text: NotRequired[QrCodeTextDict]
    branding: NotRequired[QrCodeBrandingDict]
    spec_settings: NotRequired[QrCodeSpecSettingsPublicDict]
