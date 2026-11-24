from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code4OddsRelayServiceApi(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    TOO_MANY_REQUESTS = "too_many_requests"
    TOO_MANY_FROM_ADDRESS = "too_many_from_address"

    __str__ = str.__str__


Code4OddsRelayServiceApiOrStr: TypeAlias = Annotated[
    Code4OddsRelayServiceApi | str, open_enum_validator(Code4OddsRelayServiceApi)
]
