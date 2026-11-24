from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verb1(str, Enum):
    """The verb describing the link's relationship."""

    BLOCKS = "blocks"
    DUPLICATES = "duplicates"
    RELATES_TO = "relates to"

    __str__ = str.__str__


Verb1OrStr: TypeAlias = Annotated[Verb1 | str, open_enum_validator(Verb1)]
