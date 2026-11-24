from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SimilarEnum(str, Enum):
    """An enumeration."""

    TO = "to"
    FROM = "from"

    __str__ = str.__str__


SimilarEnumOrStr: TypeAlias = Annotated[SimilarEnum | str, open_enum_validator(SimilarEnum)]
