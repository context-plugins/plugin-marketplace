from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IsExpired(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


IsExpiredOrStr: TypeAlias = Annotated[IsExpired | str, open_enum_validator(IsExpired)]
