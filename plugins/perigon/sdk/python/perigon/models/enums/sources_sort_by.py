from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourcesSortBy(str, Enum):
    GLOBAL_RANK = "globalRank"
    RELEVANCE = "relevance"
    MONTHLY_VISITS = "monthlyVisits"
    AVG_MONTHLY_POSTS = "avgMonthlyPosts"

    __str__ = str.__str__


SourcesSortByOrStr: TypeAlias = Annotated[SourcesSortBy | str, open_enum_validator(SourcesSortBy)]
