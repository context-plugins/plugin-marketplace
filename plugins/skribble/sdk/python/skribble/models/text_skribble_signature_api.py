from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TextSkribbleSignatureApi(SdkBaseModel):
    """Text displayed inside the form field."""

    content: Optional[str] = UNSET
    """Content of the text field."""

    font_name: Optional[str] = UNSET
    """Font name used. For PDF: all default PDF fonts or fonts already embedded in the document."""

    font_size: Optional[str] = UNSET
    """Font size used."""

    font_color: Optional[str] = UNSET
    """Font color as RGB value encoded in hex."""


class TextSkribbleSignatureApiDict(TypedDict):
    content: NotRequired[str]
    font_name: NotRequired[str]
    font_size: NotRequired[str]
    font_color: NotRequired[str]
