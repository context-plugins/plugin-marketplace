from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostPublishStatus(str, Enum):
    DRAFT = "draft"
    CONFIRMED = "confirmed"

    __str__ = str.__str__


PostPublishStatusOrStr: TypeAlias = Annotated[PostPublishStatus | str, open_enum_validator(PostPublishStatus)]
