from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AllocationType1(str, Enum):
    """Composition type of allocation."""

    SINGLE = "single"
    GROUP = "group"

    __str__ = str.__str__


AllocationType1OrStr: TypeAlias = Annotated[AllocationType1 | str, open_enum_validator(AllocationType1)]
