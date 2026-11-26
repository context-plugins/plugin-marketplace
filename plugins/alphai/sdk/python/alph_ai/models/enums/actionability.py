from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Actionability(str, Enum):
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    NEGLIGIBLE = "negligible"

    __str__ = str.__str__


ActionabilityOrStr: TypeAlias = Annotated[Actionability | str, open_enum_validator(Actionability)]
