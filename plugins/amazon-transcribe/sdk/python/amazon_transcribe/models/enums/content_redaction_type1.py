from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentRedactionType1(str, Enum):
    """Shows whether content redaction was enabled for your transcription."""

    PII = "PII"

    __str__ = str.__str__


ContentRedactionType1OrStr: TypeAlias = Annotated[
    ContentRedactionType1 | str, open_enum_validator(ContentRedactionType1)
]
