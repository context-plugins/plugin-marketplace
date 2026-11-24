from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Text(SdkBaseModel):
    """Optional text to display inside the form field."""

    content: Optional[str] = UNSET
    """Content of the text field."""

    font_name: Optional[str] = UNSET
    """Font name to use. It is just a suggestion. For PDF: all default PDF fonts can be used or fonts which are already
    embedded in the document. If not specified, the default font of the form field will be used."""

    font_size: Optional[str] = UNSET
    """Font size to use. If not specified, the default size for the form field will be used."""

    font_color: Optional[str] = UNSET
    """Font color to use as RGB value encoded in hex. Defaults to black (#000000)."""


class TextDict(TypedDict):
    content: NotRequired[str]
    font_name: NotRequired[str]
    font_size: NotRequired[str]
    font_color: NotRequired[str]
