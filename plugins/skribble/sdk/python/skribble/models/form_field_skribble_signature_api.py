from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .visual_signature_image import VisualSignatureImage, VisualSignatureImageDict


class FormFieldSkribbleSignatureApi(SdkBaseModel):
    """Use a form field only."""

    form_field: str
    """Name of the form field in which the signature is placed. If multiple fields of this name are present in the
    document, all will be used."""

    image: Optional[VisualSignatureImage] = UNSET
    """Visual signature image."""

    position: Optional[Any] = UNSET
    """Must not be provided when form_field is used."""

    positions: Optional[Any] = UNSET
    """Must not be provided when form_field is used."""


class FormFieldSkribbleSignatureApiDict(TypedDict):
    form_field: str
    image: NotRequired[VisualSignatureImageDict]
    position: NotRequired[Any]
    positions: NotRequired[Any]
