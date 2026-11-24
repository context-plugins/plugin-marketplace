from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeLanguageCode(str, Enum):
    EN_US = "en-US"

    __str__ = str.__str__


XAmznTranscribeLanguageCodeOrStr: TypeAlias = Annotated[
    XAmznTranscribeLanguageCode | str, open_enum_validator(XAmznTranscribeLanguageCode)
]
