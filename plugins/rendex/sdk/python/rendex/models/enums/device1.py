from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Device1(str, Enum):
    DESKTOP = "desktop"
    IPHONE_15 = "iphone_15"
    IPHONE_SE = "iphone_se"
    PIXEL_8 = "pixel_8"
    IPAD = "ipad"
    IPAD_PRO = "ipad_pro"

    __str__ = str.__str__


Device1OrStr: TypeAlias = Annotated[Device1 | str, open_enum_validator(Device1)]
