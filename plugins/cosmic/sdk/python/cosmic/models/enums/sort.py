from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort(str, Enum):
    CREATED_AT = "created_at"
    CREATED_AT2 = "-created_at"
    MODIFIED_AT = "modified_at"
    MODIFIED_AT2 = "-modified_at"
    RANDOM = "random"

    __str__ = str.__str__


SortOrStr: TypeAlias = Annotated[Sort | str, open_enum_validator(Sort)]
