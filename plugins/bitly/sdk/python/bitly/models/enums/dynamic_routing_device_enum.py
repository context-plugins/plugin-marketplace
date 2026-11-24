from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DynamicRoutingDeviceEnum(str, Enum):
    """Device type values for use in dynamic routing rules (device_match / device_exclude)"""

    MOBILE = "mobile"
    TABLET = "tablet"
    DESKTOP = "desktop"

    __str__ = str.__str__


DynamicRoutingDeviceEnumOrStr: TypeAlias = Annotated[
    DynamicRoutingDeviceEnum | str, open_enum_validator(DynamicRoutingDeviceEnum)
]
