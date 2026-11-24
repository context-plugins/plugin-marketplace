from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .visual_signature_image import VisualSignatureImage, VisualSignatureImageDict
from .visual_signature_position import VisualSignaturePosition, VisualSignaturePositionDict


class MultiplePositions(SdkBaseModel):
    """Use multiple explicit positions."""

    positions: list[VisualSignaturePosition]
    image: Optional[VisualSignatureImage] = UNSET
    """Visual signature image."""

    position: Optional[Any] = UNSET
    """Must not be provided when positions are used."""

    form_field: Optional[Any] = UNSET
    """Must not be provided when positions are used."""


class MultiplePositionsDict(TypedDict):
    positions: list[VisualSignaturePositionDict]
    image: NotRequired[VisualSignatureImageDict]
    position: NotRequired[Any]
    form_field: NotRequired[Any]
