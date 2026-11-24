from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Evaluation reason"""

    TARGETING_MATCH = "TARGETING_MATCH"
    DEFAULT = "DEFAULT"
    STATIC = "STATIC"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
