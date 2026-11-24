from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    PRIVATE_REPLY = "PRIVATE_REPLY"
    DM = "DM"
    WEBHOOK = "WEBHOOK"
    API = "API"
    ECHO = "ECHO"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]
