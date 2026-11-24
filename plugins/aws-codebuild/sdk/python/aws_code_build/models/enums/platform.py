from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Platform(str, Enum):
    """The platform's name."""

    DEBIAN = "DEBIAN"
    AMAZON_LINUX = "AMAZON_LINUX"
    UBUNTU = "UBUNTU"
    WINDOWS_SERVER = "WINDOWS_SERVER"

    __str__ = str.__str__


PlatformOrStr: TypeAlias = Annotated[Platform | str, open_enum_validator(Platform)]
