from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeContentIdentificationType(str, Enum):
    PII = "PII"

    __str__ = str.__str__


XAmznTranscribeContentIdentificationTypeOrStr: TypeAlias = Annotated[
    XAmznTranscribeContentIdentificationType | str, open_enum_validator(XAmznTranscribeContentIdentificationType)
]
