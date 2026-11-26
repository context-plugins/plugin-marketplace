from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonAlphAiRestRadarApi(str, Enum):
    DISABLED = "disabled"
    MISSING = "missing"
    STALE = "stale"
    FUTURE = "future"
    INVALID = "invalid"
    READ_FAILED = "read_failed"

    __str__ = str.__str__


ReasonAlphAiRestRadarApiOrStr: TypeAlias = Annotated[
    ReasonAlphAiRestRadarApi | str, open_enum_validator(ReasonAlphAiRestRadarApi)
]
