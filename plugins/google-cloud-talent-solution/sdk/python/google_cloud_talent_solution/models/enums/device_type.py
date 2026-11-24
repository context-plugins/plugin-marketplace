from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeviceType(str, Enum):
    """Type of the device."""

    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    WEB = "WEB"
    MOBILE_WEB = "MOBILE_WEB"
    ANDROID = "ANDROID"
    IOS = "IOS"
    BOT = "BOT"
    OTHER = "OTHER"

    __str__ = str.__str__


DeviceTypeOrStr: TypeAlias = Annotated[DeviceType | str, open_enum_validator(DeviceType)]
