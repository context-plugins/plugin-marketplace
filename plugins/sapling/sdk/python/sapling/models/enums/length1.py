from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Length1(str, Enum):
    """Target summary size: "short" (1-2 sentences), "medium" (one paragraph, the default) or "long" (a few short
    paragraphs)."""

    SHORT = "short"
    MEDIUM = "medium"
    LONG = "long"

    __str__ = str.__str__


Length1OrStr: TypeAlias = Annotated[Length1 | str, open_enum_validator(Length1)]
