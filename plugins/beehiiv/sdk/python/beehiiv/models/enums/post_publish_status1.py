from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostPublishStatus1(str, Enum):
    """The status of the post. If not provided, the default (``draft``) value will be used and the post will not be
    scheduled or published. Explicitly pass ``confirmed`` to have the post publish immediately (if no ``scheduled_at``
    is provided) or at the ``scheduled_at`` time."""

    DRAFT = "draft"
    CONFIRMED = "confirmed"

    __str__ = str.__str__


PostPublishStatus1OrStr: TypeAlias = Annotated[PostPublishStatus1 | str, open_enum_validator(PostPublishStatus1)]
