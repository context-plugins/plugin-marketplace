from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentFormat1(str, Enum):
    """Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to HTML for
    storage. Storage is always HTML; this parameter just tells us what format you're sending."""

    MARKDOWN = "markdown"
    HTML = "html"

    __str__ = str.__str__


ContentFormat1OrStr: TypeAlias = Annotated[ContentFormat1 | str, open_enum_validator(ContentFormat1)]
