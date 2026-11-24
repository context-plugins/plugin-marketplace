from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentFormat2(str, Enum):
    """Format of content. For input: specifies format of provided content (defaults to 'html'). For output: controls
    response format - 'markdown' (default) or 'html' to include HTML content."""

    MARKDOWN = "markdown"
    HTML = "html"

    __str__ = str.__str__


ContentFormat2OrStr: TypeAlias = Annotated[ContentFormat2 | str, open_enum_validator(ContentFormat2)]
