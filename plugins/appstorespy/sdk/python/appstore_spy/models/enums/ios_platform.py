from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IosPlatform(str, Enum):
    """An enumeration."""

    I_PAD = "iPad"
    I_PHONE = "iPhone"

    __str__ = str.__str__


IosPlatformOrStr: TypeAlias = Annotated[IosPlatform | str, open_enum_validator(IosPlatform)]
