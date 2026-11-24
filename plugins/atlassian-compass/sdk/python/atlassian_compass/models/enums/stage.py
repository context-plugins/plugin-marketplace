from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Stage(str, Enum):
    """The stage of the lifecycle event."""

    PRE_RELEASE = "PRE_RELEASE"
    PRODUCTION = "PRODUCTION"
    DEPRECATION = "DEPRECATION"
    END_OF_LIFE = "END_OF_LIFE"

    __str__ = str.__str__


StageOrStr: TypeAlias = Annotated[Stage | str, open_enum_validator(Stage)]
