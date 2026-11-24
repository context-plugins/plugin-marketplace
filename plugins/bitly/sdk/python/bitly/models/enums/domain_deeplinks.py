from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DomainDeeplinks(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


DomainDeeplinksOrStr: TypeAlias = Annotated[DomainDeeplinks | str, open_enum_validator(DomainDeeplinks)]
