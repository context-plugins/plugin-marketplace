from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostSocialShare2(str, Enum):
    """The social share type to use for this post."""

    COMMENTS_AND_LIKES_ONLY = "comments_and_likes_only"
    WITH_COMMENTS_AND_LIKES = "with_comments_and_likes"
    TOP = "top"
    NONE = "none"

    __str__ = str.__str__


PostSocialShare2OrStr: TypeAlias = Annotated[PostSocialShare2 | str, open_enum_validator(PostSocialShare2)]
