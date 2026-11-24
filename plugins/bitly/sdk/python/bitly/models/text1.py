from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .text import Text, TextDict


class Text1(SdkBaseModel):
    """The text to be inserted into the QR code's frame"""

    primary: Optional[Text] = UNSET
    """An object describing text with color"""

    secondary: Optional[Text] = UNSET
    """An object describing text with color"""


class Text1Dict(TypedDict):
    primary: NotRequired[TextDict]
    secondary: NotRequired[TextDict]
