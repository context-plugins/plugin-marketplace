from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReplyControl(str, Enum):
    EVERYONE = "everyone"
    ACCOUNTS_YOU_FOLLOW = "accounts_you_follow"
    MENTIONED_ONLY = "mentioned_only"
    PARENT_POST_AUTHOR_ONLY = "parent_post_author_only"
    FOLLOWERS_ONLY = "followers_only"

    __str__ = str.__str__


ReplyControlOrStr: TypeAlias = Annotated[ReplyControl | str, open_enum_validator(ReplyControl)]
