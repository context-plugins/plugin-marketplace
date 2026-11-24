from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VerbShortcutStoryLinksApi(str, Enum):
    """The type of link."""

    BLOCKS = "blocks"
    DUPLICATES = "duplicates"
    RELATES_TO = "relates to"

    __str__ = str.__str__


VerbShortcutStoryLinksApiOrStr: TypeAlias = Annotated[
    VerbShortcutStoryLinksApi | str, open_enum_validator(VerbShortcutStoryLinksApi)
]
