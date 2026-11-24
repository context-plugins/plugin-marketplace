from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .text_skribble_signature_api import TextSkribbleSignatureApi, TextSkribbleSignatureApiDict
from .visual_signature_image import VisualSignatureImage, VisualSignatureImageDict
from .visual_signature_position import VisualSignaturePosition, VisualSignaturePositionDict
from .visual_signature_position1 import VisualSignaturePosition1, VisualSignaturePosition1Dict


class VisualSignatureResponse(SdkBaseModel):
    """Visual signature placement information."""

    image: Optional[VisualSignatureImage] = UNSET
    """Visual signature image."""

    position: Optional[VisualSignaturePosition1] = UNSET
    """Position where the signature should appear."""

    positions: Optional[list[VisualSignaturePosition]] = UNSET
    """List of additional positions where the signature should appear."""

    form_field: Optional[str] = UNSET
    """Name of the form field in which the signature is placed. If multiple fields of this name are present in the
    document, all will be used. Takes precedence before positions."""

    text: Optional[TextSkribbleSignatureApi] = UNSET
    """Text displayed inside the form field."""


class VisualSignatureResponseDict(TypedDict):
    image: NotRequired[VisualSignatureImageDict]
    position: NotRequired[VisualSignaturePosition1Dict]
    positions: NotRequired[list[VisualSignaturePositionDict]]
    form_field: NotRequired[str]
    text: NotRequired[TextSkribbleSignatureApiDict]
