from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason1AlphAiRestRadarApi(str, Enum):
    NON_SEC_SYMBOL = "non_sec_symbol"
    UNKNOWN_SYMBOL = "unknown_symbol"
    MISSING_CIK = "missing_cik"
    ISSUER_CHANGED = "issuer_changed"

    __str__ = str.__str__


Reason1AlphAiRestRadarApiOrStr: TypeAlias = Annotated[
    Reason1AlphAiRestRadarApi | str, open_enum_validator(Reason1AlphAiRestRadarApi)
]
