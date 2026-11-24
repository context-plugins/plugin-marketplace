from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputFormat(str, Enum):
    """How to interpret ``content``. 'markdown' is converted to styled HTML; 'html' is used as a body fragment."""

    MARKDOWN = "markdown"
    HTML = "html"

    __str__ = str.__str__


InputFormatOrStr: TypeAlias = Annotated[InputFormat | str, open_enum_validator(InputFormat)]
