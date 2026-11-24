from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DynamicRoutingPlatformEnum(str, Enum):
    """Platform (OS) values for use in dynamic routing rules (os_match / os_exclude)"""

    IOS = "ios"
    ANDROID = "android"

    __str__ = str.__str__


DynamicRoutingPlatformEnumOrStr: TypeAlias = Annotated[
    DynamicRoutingPlatformEnum | str, open_enum_validator(DynamicRoutingPlatformEnum)
]
