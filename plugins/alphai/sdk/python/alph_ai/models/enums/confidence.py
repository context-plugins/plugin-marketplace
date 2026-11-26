from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Confidence(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


ConfidenceOrStr: TypeAlias = Annotated[Confidence | str, open_enum_validator(Confidence)]
