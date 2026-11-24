from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExtractFormat1(str, Enum):
    MARKDOWN = "markdown"
    JSON = "json"
    HTML = "html"
    TEXT = "text"

    __str__ = str.__str__


ExtractFormat1OrStr: TypeAlias = Annotated[ExtractFormat1 | str, open_enum_validator(ExtractFormat1)]
