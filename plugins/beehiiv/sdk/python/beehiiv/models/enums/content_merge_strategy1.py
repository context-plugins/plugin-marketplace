from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentMergeStrategy1(str, Enum):
    """Controls how provided ``blocks`` interact with the post's existing content. Defaults to ``replace``. Use
    ``append_to_template`` to preserve template header blocks when updating posts that were created from a template."""

    REPLACE = "replace"
    APPEND_TO_TEMPLATE = "append_to_template"
    APPEND = "append"
    PREPEND = "prepend"

    __str__ = str.__str__


ContentMergeStrategy1OrStr: TypeAlias = Annotated[
    ContentMergeStrategy1 | str, open_enum_validator(ContentMergeStrategy1)
]
