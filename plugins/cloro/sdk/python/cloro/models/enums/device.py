from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Device(str, Enum):
    """Device the search is run from. 'desktop' returns the desktop news SERP; 'ios' (Safari on iPhone), 'android'
    (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile news SERP."""

    DESKTOP = "desktop"
    MOBILE = "mobile"
    IOS = "ios"
    ANDROID = "android"

    __str__ = str.__str__


DeviceOrStr: TypeAlias = Annotated[Device | str, open_enum_validator(Device)]
