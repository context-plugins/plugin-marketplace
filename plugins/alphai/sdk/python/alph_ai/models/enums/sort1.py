from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Sort1(str, Enum):
    PUBLISHED = "published"
    INGESTED = "ingested"

    __str__ = str.__str__


Sort1OrStr: TypeAlias = Annotated[Sort1 | str, open_enum_validator(Sort1)]
