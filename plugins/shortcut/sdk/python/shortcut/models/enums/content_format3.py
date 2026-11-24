from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentFormat3(str, Enum):
    MARKDOWN = "markdown"
    HTML = "html"

    __str__ = str.__str__


ContentFormat3OrStr: TypeAlias = Annotated[ContentFormat3 | str, open_enum_validator(ContentFormat3)]
