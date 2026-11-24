from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Transport(str, Enum):
    """Registration trunks are TLS-only."""

    TLS = "tls"

    __str__ = str.__str__


TransportOrStr: TypeAlias = Annotated[Transport | str, open_enum_validator(Transport)]
