from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostStatus(str, Enum):
    """The status of the post.<br>``draft`` - not been scheduled.<br>``confirmed`` - The post will be active after the
    ``scheduled_at``.<br>``archived`` - The post is no longer active."""

    DRAFT = "draft"
    CONFIRMED = "confirmed"
    ARCHIVED = "archived"

    __str__ = str.__str__


PostStatusOrStr: TypeAlias = Annotated[PostStatus | str, open_enum_validator(PostStatus)]
