from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublishedAs(str, Enum):
    """How the extension was published"""

    GLOBAL = "Global"
    DEV = "Dev"
    PTE = "PTE"

    __str__ = str.__str__


PublishedAsOrStr: TypeAlias = Annotated[PublishedAs | str, open_enum_validator(PublishedAs)]
