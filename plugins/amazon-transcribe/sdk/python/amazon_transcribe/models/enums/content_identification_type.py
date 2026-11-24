from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentIdentificationType(str, Enum):
    """Indicates whether content identification was enabled for your transcription request."""

    PHI = "PHI"

    __str__ = str.__str__


ContentIdentificationTypeOrStr: TypeAlias = Annotated[
    ContentIdentificationType | str, open_enum_validator(ContentIdentificationType)
]
