from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeAlphAiRestRadarApi(str, Enum):
    HISTORICAL_PREVIEW = "historical_preview"
    LIVE = "live"

    __str__ = str.__str__


ModeAlphAiRestRadarApiOrStr: TypeAlias = Annotated[
    ModeAlphAiRestRadarApi | str, open_enum_validator(ModeAlphAiRestRadarApi)
]
