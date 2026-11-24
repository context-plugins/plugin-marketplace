from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostsListRequestHiddenFromFeed(str, Enum):
    ALL = "all"
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


PostsListRequestHiddenFromFeedOrStr: TypeAlias = Annotated[
    PostsListRequestHiddenFromFeed | str, open_enum_validator(PostsListRequestHiddenFromFeed)
]
