from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SummarizeField(str, Enum):
    TITLE = "TITLE"
    CONTENT = "CONTENT"
    SUMMARY = "SUMMARY"

    __str__ = str.__str__


SummarizeFieldOrStr: TypeAlias = Annotated[SummarizeField | str, open_enum_validator(SummarizeField)]
