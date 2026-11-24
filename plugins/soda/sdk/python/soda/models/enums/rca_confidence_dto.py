from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RcaConfidenceDto(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


RcaConfidenceDtoOrStr: TypeAlias = Annotated[RcaConfidenceDto | str, open_enum_validator(RcaConfidenceDto)]
