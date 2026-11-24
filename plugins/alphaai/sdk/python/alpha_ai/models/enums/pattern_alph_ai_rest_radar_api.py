from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PatternAlphAiRestRadarApi(str, Enum):
    OPEN_MARKET = "open_market"

    __str__ = str.__str__


PatternAlphAiRestRadarApiOrStr: TypeAlias = Annotated[
    PatternAlphAiRestRadarApi | str, open_enum_validator(PatternAlphAiRestRadarApi)
]
