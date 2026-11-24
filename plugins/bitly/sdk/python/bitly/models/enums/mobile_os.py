from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MobileOs(str, Enum):
    IOS = "ios"
    ANDROID = "android"

    __str__ = str.__str__


MobileOsOrStr: TypeAlias = Annotated[MobileOs | str, open_enum_validator(MobileOs)]
