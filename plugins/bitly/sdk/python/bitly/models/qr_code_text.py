from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .text import Text, TextDict


class QrCodeText(SdkBaseModel):
    """Contains the center, top, and bottom text to be used in the QR code"""

    center: Optional[Text] = UNSET
    """An object describing text with color"""

    top: Optional[Text] = UNSET
    """An object describing text with color"""

    bottom: Optional[Text] = UNSET
    """An object describing text with color"""


class QrCodeTextDict(TypedDict):
    center: NotRequired[TextDict]
    top: NotRequired[TextDict]
    bottom: NotRequired[TextDict]
