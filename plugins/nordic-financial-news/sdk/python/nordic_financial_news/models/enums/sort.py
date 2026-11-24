from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    RELEVANCE = "relevance"
    LATEST = "latest"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
