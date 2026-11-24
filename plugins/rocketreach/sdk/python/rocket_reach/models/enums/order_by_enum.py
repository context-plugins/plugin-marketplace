from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrderByEnum(str, Enum):
    RELEVANCE = "relevance"
    POPULARITY = "popularity"
    SCORE = "score"

    __str__ = str.__str__


OrderByEnumOrStr: TypeAlias = Annotated[OrderByEnum | str, open_enum_validator(OrderByEnum)]
