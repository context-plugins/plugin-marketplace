from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AType(str, Enum):
    """Type of the agent leg. ``sip_account`` rings one of your SIP accounts; ``stream`` connects your own WebSocket
    endpoint first, where the account allows it."""

    SIP_ACCOUNT = "sip_account"
    STREAM = "stream"

    __str__ = str.__str__


ATypeOrStr: TypeAlias = Annotated[AType | str, open_enum_validator(AType)]
