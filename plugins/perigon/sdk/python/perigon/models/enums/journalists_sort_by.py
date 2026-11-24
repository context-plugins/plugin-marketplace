from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JournalistsSortBy(str, Enum):
    AVG_MONTHLY_POSTS = "avgMonthlyPosts"
    LINKEDIN_CONNECTIONS = "linkedinConnections"
    LINKEDIN_FOLLOWERS = "linkedinFollowers"

    __str__ = str.__str__


JournalistsSortByOrStr: TypeAlias = Annotated[JournalistsSortBy | str, open_enum_validator(JournalistsSortBy)]
