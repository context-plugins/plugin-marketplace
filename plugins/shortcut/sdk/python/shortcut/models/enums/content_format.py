from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentFormat(str, Enum):
    """Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response."""

    MARKDOWN = "markdown"
    HTML = "html"

    __str__ = str.__str__


ContentFormatOrStr: TypeAlias = Annotated[ContentFormat | str, open_enum_validator(ContentFormat)]
