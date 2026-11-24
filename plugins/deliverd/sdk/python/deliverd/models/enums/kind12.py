from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind12(str, Enum):
    DEPENDS_ON = "depends_on"
    BLOCKS = "blocks"
    RELATED_TO = "related_to"
    SUPERSEDES = "supersedes"
    RESULTED_IN = "resulted_in"

    __str__ = str.__str__


Kind12OrStr: TypeAlias = Annotated[Kind12 | str, open_enum_validator(Kind12)]
