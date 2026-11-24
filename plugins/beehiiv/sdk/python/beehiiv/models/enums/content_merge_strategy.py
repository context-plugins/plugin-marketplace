from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentMergeStrategy(str, Enum):
    """Controls how provided blocks interact with the post's existing content on update."""

    REPLACE = "replace"
    APPEND_TO_TEMPLATE = "append_to_template"
    APPEND = "append"
    PREPEND = "prepend"

    __str__ = str.__str__


ContentMergeStrategyOrStr: TypeAlias = Annotated[ContentMergeStrategy | str, open_enum_validator(ContentMergeStrategy)]
