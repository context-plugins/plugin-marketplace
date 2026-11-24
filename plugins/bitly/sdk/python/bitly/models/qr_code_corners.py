from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .qr_code_corner import QrCodeCorner, QrCodeCornerDict


class QrCodeCorners(SdkBaseModel):
    """An object representing all three corners of the QR code. The corners corresponding to each property are: corner_1
    = top left, corner_2 = top right, and corner_3 = bottom right"""

    corner_1: Optional[QrCodeCorner] = UNSET
    """Represents one corner, both inner and outer, of a QR code, with color and shape values"""

    corner_2: Optional[QrCodeCorner] = UNSET
    """Represents one corner, both inner and outer, of a QR code, with color and shape values"""

    corner_3: Optional[QrCodeCorner] = UNSET
    """Represents one corner, both inner and outer, of a QR code, with color and shape values"""


class QrCodeCornersDict(TypedDict):
    corner_1: NotRequired[QrCodeCornerDict]
    corner_2: NotRequired[QrCodeCornerDict]
    corner_3: NotRequired[QrCodeCornerDict]
