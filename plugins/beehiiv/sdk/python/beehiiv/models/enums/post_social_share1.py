from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostSocialShare1(str, Enum):
    """The social share type to use for this post. If not provided, the default value will be used."""

    COMMENTS_AND_LIKES_ONLY = "comments_and_likes_only"
    WITH_COMMENTS_AND_LIKES = "with_comments_and_likes"
    TOP = "top"
    NONE = "none"

    __str__ = str.__str__


PostSocialShare1OrStr: TypeAlias = Annotated[PostSocialShare1 | str, open_enum_validator(PostSocialShare1)]
