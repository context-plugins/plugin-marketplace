from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    """``relevance`` (ranked) or ``published`` (newest first) — the latter when every word is too common to rank on."""

    RELEVANCE = "relevance"
    PUBLISHED = "published"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
