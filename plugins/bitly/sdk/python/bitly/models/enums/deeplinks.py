from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Deeplinks(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


DeeplinksOrStr: TypeAlias = Annotated[Deeplinks | str, open_enum_validator(Deeplinks)]
