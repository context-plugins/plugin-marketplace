from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ShouldCreateIntro(str, Enum):
    """OPTIONAL. You can create an additional document to display open api intro."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


ShouldCreateIntroOrStr: TypeAlias = Annotated[ShouldCreateIntro | str, open_enum_validator(ShouldCreateIntro)]
