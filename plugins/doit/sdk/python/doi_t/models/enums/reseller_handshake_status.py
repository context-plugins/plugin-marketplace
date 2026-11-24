from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResellerHandshakeStatus(str, Enum):
    """Outcome of processing this batch item."""

    HANDSHAKE_ISSUED = "handshake_issued"
    NO_OP = "no_op"
    MAPPED = "mapped"
    REMAPPED = "remapped"
    FAILED = "failed"

    __str__ = str.__str__


ResellerHandshakeStatusOrStr: TypeAlias = Annotated[
    ResellerHandshakeStatus | str, open_enum_validator(ResellerHandshakeStatus)
]
