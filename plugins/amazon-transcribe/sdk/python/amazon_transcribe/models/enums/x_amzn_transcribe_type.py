from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeType(str, Enum):
    CONVERSATION = "CONVERSATION"
    DICTATION = "DICTATION"

    __str__ = str.__str__


XAmznTranscribeTypeOrStr: TypeAlias = Annotated[XAmznTranscribeType | str, open_enum_validator(XAmznTranscribeType)]
