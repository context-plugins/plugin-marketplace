from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostPublishStatus2(str, Enum):
    """Transition the post's status. Use ``confirmed`` to schedule or publish a draft post. Only the ``draft`` →
    ``confirmed`` transition is supported — a confirmed post cannot be moved back to ``draft``."""

    DRAFT = "draft"
    CONFIRMED = "confirmed"

    __str__ = str.__str__


PostPublishStatus2OrStr: TypeAlias = Annotated[PostPublishStatus2 | str, open_enum_validator(PostPublishStatus2)]
