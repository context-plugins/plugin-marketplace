from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostProcessingState(str, Enum):
    """The background creation state of the post."""

    PENDING = "pending"

    __str__ = str.__str__


PostProcessingStateOrStr: TypeAlias = Annotated[PostProcessingState | str, open_enum_validator(PostProcessingState)]
