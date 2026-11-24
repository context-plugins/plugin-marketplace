from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FallbackMode(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


FallbackModeOrStr: TypeAlias = Annotated[FallbackMode | str, open_enum_validator(FallbackMode)]
