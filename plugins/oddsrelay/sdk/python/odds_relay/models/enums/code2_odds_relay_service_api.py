from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code2OddsRelayServiceApi(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    TEMPORARILY_UNAVAILABLE = "temporarily_unavailable"
    RAW_NOT_ENABLED = "raw_not_enabled"

    __str__ = str.__str__


Code2OddsRelayServiceApiOrStr: TypeAlias = Annotated[
    Code2OddsRelayServiceApi | str, open_enum_validator(Code2OddsRelayServiceApi)
]
