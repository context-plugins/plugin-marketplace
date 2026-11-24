from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OriginalMediaType(str, Enum):
    """The original media the speech was recorded on."""

    ORIGINAL_MEDIA_TYPE_UNSPECIFIED = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED"
    AUDIO = "AUDIO"
    VIDEO = "VIDEO"

    __str__ = str.__str__


OriginalMediaTypeOrStr: TypeAlias = Annotated[OriginalMediaType | str, open_enum_validator(OriginalMediaType)]
