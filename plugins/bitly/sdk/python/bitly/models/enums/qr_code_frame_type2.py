from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QrCodeFrameType2(str, Enum):
    """The unique id of the selected frame"""

    NONE = "none"
    BORDER_ONLY = "border_only"
    TEXT_BOTTOM = "text_bottom"
    TOOLTIP_BOTTOM = "tooltip_bottom"
    ARROW = "arrow"
    TEXT_TOP = "text_top"
    TEXT_BOTTOM_IN_FRAME = "text_bottom_in_frame"
    SCRIPT = "script"
    TEXT_TOP_AND_BOTTOM = "text_top_and_bottom"
    URL = "url"
    INSTAGRAM = "instagram"

    __str__ = str.__str__


QrCodeFrameType2OrStr: TypeAlias = Annotated[QrCodeFrameType2 | str, open_enum_validator(QrCodeFrameType2)]
