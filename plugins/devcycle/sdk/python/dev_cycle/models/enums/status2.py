from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    """The status of a Variable. Must be one of [active | archived]"""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
