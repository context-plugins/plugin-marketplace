from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Device1(str, Enum):
    """Device type for search results"""

    DESKTOP = "desktop"
    MOBILE = "mobile"

    __str__ = str.__str__


Device1OrStr: TypeAlias = Annotated[Device1 | str, open_enum_validator(Device1)]
