from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExtractFormat(str, Enum):
    """Shape of the extracted content when ``extract`` is true."""

    MARKDOWN = "markdown"
    JSON = "json"
    HTML = "html"
    TEXT = "text"

    __str__ = str.__str__


ExtractFormatOrStr: TypeAlias = Annotated[ExtractFormat | str, open_enum_validator(ExtractFormat)]
