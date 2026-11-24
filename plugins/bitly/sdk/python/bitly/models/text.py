from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Text(SdkBaseModel):
    """An object describing text with color"""

    content: str
    """The text to be used"""

    color: str = "#ffffff"
    """The color of the text in hex code format"""


class TextDict(TypedDict):
    content: str
    color: NotRequired[str]
