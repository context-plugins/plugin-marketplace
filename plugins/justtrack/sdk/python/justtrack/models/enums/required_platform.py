from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequiredPlatform(str, Enum):
    """identifier of the platform"""

    ANDROID = "android"
    IOS = "ios"

    __str__ = str.__str__


RequiredPlatformOrStr: TypeAlias = Annotated[RequiredPlatform | str, open_enum_validator(RequiredPlatform)]
