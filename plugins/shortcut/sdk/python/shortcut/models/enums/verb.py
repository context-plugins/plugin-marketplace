from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verb(str, Enum):
    """How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to"."""

    BLOCKS = "blocks"
    DUPLICATES = "duplicates"
    RELATES_TO = "relates to"

    __str__ = str.__str__


VerbOrStr: TypeAlias = Annotated[Verb | str, open_enum_validator(Verb)]
