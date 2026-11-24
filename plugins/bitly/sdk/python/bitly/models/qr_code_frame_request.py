from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .colors import Colors, ColorsDict
from .enums.qr_code_frame_type2 import QrCodeFrameType2, QrCodeFrameType2OrStr
from .text1 import Text1, Text1Dict


class QrCodeFrameRequest(SdkBaseModel):
    id: QrCodeFrameType2OrStr = QrCodeFrameType2.NONE
    """The unique id of the selected frame"""

    colors: Optional[Colors] = UNSET
    """An object of named colors denoting which color should go to which area of the frame"""

    text: Optional[Text1] = UNSET
    """The text to be inserted into the QR code's frame"""


class QrCodeFrameRequestDict(TypedDict):
    id: QrCodeFrameType2OrStr
    colors: NotRequired[ColorsDict]
    text: NotRequired[Text1Dict]
