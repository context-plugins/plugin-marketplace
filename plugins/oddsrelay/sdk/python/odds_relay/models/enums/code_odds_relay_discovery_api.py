from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CodeOddsRelayDiscoveryApi(str, Enum):
    """Stable machine code; branch on this, never on ``message``."""

    TOO_MANY_REQUESTS = "too_many_requests"
    TOO_MANY_FROM_ADDRESS = "too_many_from_address"

    __str__ = str.__str__


CodeOddsRelayDiscoveryApiOrStr: TypeAlias = Annotated[
    CodeOddsRelayDiscoveryApi | str, open_enum_validator(CodeOddsRelayDiscoveryApi)
]
