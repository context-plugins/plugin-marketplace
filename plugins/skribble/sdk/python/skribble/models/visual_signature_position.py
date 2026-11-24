from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VisualSignaturePosition(SdkBaseModel):
    page: Optional[str] = UNSET
    """Page number (0-indexed) where the signature appears. This is a String and not a number!"""

    height: Optional[float] = UNSET
    """Height of the signature in pixels."""

    width: Optional[float] = UNSET
    """Width of the signature in pixels."""

    x: Optional[float] = UNSET
    """X-coordinate (pixels from left) of signature."""

    y: Optional[float] = UNSET
    """Y-coordinate (pixels from top) of signature."""

    rotation: Optional[float] = UNSET
    """Defines a rotation of the field content. If used in context with a form field, then only the values 0, 90, 180,
    270 are legal. Otherwise every value is legal. The rotation is applied counter clockwise."""


class VisualSignaturePositionDict(TypedDict):
    page: NotRequired[str]
    height: NotRequired[float]
    width: NotRequired[float]
    x: NotRequired[float]
    y: NotRequired[float]
    rotation: NotRequired[float]
