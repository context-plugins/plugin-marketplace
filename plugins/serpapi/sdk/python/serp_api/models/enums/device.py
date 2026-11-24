from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Device(str, Enum):
    DESKTOP = "desktop"
    TABLET = "tablet"
    MOBILE = "mobile"

    __str__ = str.__str__


DeviceOrStr: TypeAlias = Annotated[Device | str, open_enum_validator(Device)]
