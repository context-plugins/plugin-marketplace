from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostSocialShare(str, Enum):
    COMMENTS_AND_LIKES_ONLY = "comments_and_likes_only"
    WITH_COMMENTS_AND_LIKES = "with_comments_and_likes"
    TOP = "top"
    NONE = "none"

    __str__ = str.__str__


PostSocialShareOrStr: TypeAlias = Annotated[PostSocialShare | str, open_enum_validator(PostSocialShare)]
