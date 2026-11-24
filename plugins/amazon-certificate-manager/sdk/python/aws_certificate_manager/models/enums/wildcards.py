from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Wildcards(str, Enum):
    """Whether validation applies to wildcard domains."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


WildcardsOrStr: TypeAlias = Annotated[Wildcards | str, open_enum_validator(Wildcards)]
