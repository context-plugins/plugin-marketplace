from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .visual_signature_image import VisualSignatureImage, VisualSignatureImageDict
from .visual_signature_position import VisualSignaturePosition, VisualSignaturePositionDict


class SinglePosition(SdkBaseModel):
    """Use a single explicit position."""

    position: VisualSignaturePosition
    image: Optional[VisualSignatureImage] = UNSET
    """Visual signature image."""

    positions: Optional[Any] = UNSET
    """Must not be provided when position is used."""

    form_field: Optional[Any] = UNSET
    """Must not be provided when position is used."""


class SinglePositionDict(TypedDict):
    position: VisualSignaturePositionDict
    image: NotRequired[VisualSignatureImageDict]
    positions: NotRequired[Any]
    form_field: NotRequired[Any]
