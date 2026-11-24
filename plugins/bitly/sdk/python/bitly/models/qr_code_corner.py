from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.shape import Shape, ShapeOrStr


class QrCodeCorner(SdkBaseModel):
    """Represents one corner, both inner and outer, of a QR code, with color and shape values"""

    inner_color: Optional[str] = UNSET
    """The inner color of a corner of the QR code in hex code format"""

    outer_color: Optional[str] = UNSET
    """The outer color of a corner of the QR code in hex code format"""

    shape: ShapeOrStr = Shape.STANDARD
    """The shape one of the QR code's corners should take"""


class QrCodeCornerDict(TypedDict):
    inner_color: NotRequired[str]
    outer_color: NotRequired[str]
    shape: NotRequired[ShapeOrStr]
