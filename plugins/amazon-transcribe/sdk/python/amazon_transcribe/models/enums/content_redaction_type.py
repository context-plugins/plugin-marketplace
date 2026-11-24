from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentRedactionType(str, Enum):
    """Shows whether content redaction was enabled for your Call Analytics transcription."""

    PII = "PII"

    __str__ = str.__str__


ContentRedactionTypeOrStr: TypeAlias = Annotated[ContentRedactionType | str, open_enum_validator(ContentRedactionType)]
