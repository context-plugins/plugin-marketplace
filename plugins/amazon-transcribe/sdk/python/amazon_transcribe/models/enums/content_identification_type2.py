from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentIdentificationType2(str, Enum):
    """Shows whether content identification was enabled for your transcription."""

    PII = "PII"

    __str__ = str.__str__


ContentIdentificationType2OrStr: TypeAlias = Annotated[
    ContentIdentificationType2 | str, open_enum_validator(ContentIdentificationType2)
]
