from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Archived(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


ArchivedOrStr: TypeAlias = Annotated[Archived | str, open_enum_validator(Archived)]
