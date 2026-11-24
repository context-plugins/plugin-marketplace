from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncidentStatusDto(str, Enum):
    REPORTED = "reported"
    INVESTIGATING = "investigating"
    FIXING = "fixing"
    RESOLVED = "resolved"

    __str__ = str.__str__


IncidentStatusDtoOrStr: TypeAlias = Annotated[IncidentStatusDto | str, open_enum_validator(IncidentStatusDto)]
