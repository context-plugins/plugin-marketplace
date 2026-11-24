from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Policy(str, Enum):
    """How cautious ``engage`` is. Default balanced."""

    STRICT = "strict"
    BALANCED = "balanced"
    PERMISSIVE = "permissive"

    __str__ = str.__str__


PolicyOrStr: TypeAlias = Annotated[Policy | str, open_enum_validator(Policy)]
