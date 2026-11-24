from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncidentSeverityDto(str, Enum):
    MINOR = "minor"
    MAJOR = "major"
    CRITICAL = "critical"

    __str__ = str.__str__


IncidentSeverityDtoOrStr: TypeAlias = Annotated[IncidentSeverityDto | str, open_enum_validator(IncidentSeverityDto)]
