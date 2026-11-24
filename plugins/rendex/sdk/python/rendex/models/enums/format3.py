from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format3(str, Enum):
    MARKDOWN = "markdown"
    JSON = "json"
    HTML = "html"
    TEXT = "text"

    __str__ = str.__str__


Format3OrStr: TypeAlias = Annotated[Format3 | str, open_enum_validator(Format3)]
