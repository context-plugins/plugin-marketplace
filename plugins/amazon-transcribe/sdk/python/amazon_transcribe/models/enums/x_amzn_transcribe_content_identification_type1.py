from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeContentIdentificationType1(str, Enum):
    PHI = "PHI"

    __str__ = str.__str__


XAmznTranscribeContentIdentificationType1OrStr: TypeAlias = Annotated[
    XAmznTranscribeContentIdentificationType1 | str, open_enum_validator(XAmznTranscribeContentIdentificationType1)
]
