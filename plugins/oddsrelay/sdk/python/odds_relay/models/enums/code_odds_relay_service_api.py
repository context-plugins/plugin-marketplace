from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CodeOddsRelayServiceApi(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    NOT_FOUND = "not_found"
    UNKNOWN_TYPE = "unknown_type"
    UNKNOWN_REGION = "unknown_region"
    UNKNOWN_EVENT = "unknown_event"

    __str__ = str.__str__


CodeOddsRelayServiceApiOrStr: TypeAlias = Annotated[
    CodeOddsRelayServiceApi | str, open_enum_validator(CodeOddsRelayServiceApi)
]
