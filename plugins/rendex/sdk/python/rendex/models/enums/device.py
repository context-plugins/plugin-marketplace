from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Device(str, Enum):
    """Device preset — sets viewport, device scale, and user agent in one parameter. Explicit width/height/userAgent
    still win."""

    DESKTOP = "desktop"
    IPHONE_15 = "iphone_15"
    IPHONE_SE = "iphone_se"
    PIXEL_8 = "pixel_8"
    IPAD = "ipad"
    IPAD_PRO = "ipad_pro"

    __str__ = str.__str__


DeviceOrStr: TypeAlias = Annotated[Device | str, open_enum_validator(Device)]
