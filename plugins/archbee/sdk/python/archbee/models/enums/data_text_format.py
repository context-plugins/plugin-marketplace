from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataTextFormat(str, Enum):
    """OPTIONAL. Return documents with dataText in this format"""

    MARKDOWN = "markdown"
    HTML = "html"

    __str__ = str.__str__


DataTextFormatOrStr: TypeAlias = Annotated[DataTextFormat | str, open_enum_validator(DataTextFormat)]
