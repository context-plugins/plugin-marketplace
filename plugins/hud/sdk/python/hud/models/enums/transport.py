from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Transport(str, Enum):
    HTTP = "http"
    STDIO = "stdio"
    CHANNEL = "channel"

    __str__ = str.__str__


TransportOrStr: TypeAlias = Annotated[Transport | str, open_enum_validator(Transport)]
