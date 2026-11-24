from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentIdentificationType1(str, Enum):
    """Labels all personal health information (PHI) identified in your transcript. For more information, see Identifying
    personal health information (PHI) in a transcription."""

    PHI = "PHI"

    __str__ = str.__str__


ContentIdentificationType1OrStr: TypeAlias = Annotated[
    ContentIdentificationType1 | str, open_enum_validator(ContentIdentificationType1)
]
