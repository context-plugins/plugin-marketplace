from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WouldBe(str, Enum):
    ALLOW = "allow"
    REDACT = "redact"
    ASK = "ask"
    DENY = "deny"

    __str__ = str.__str__


WouldBeOrStr: TypeAlias = Annotated[WouldBe | str, open_enum_validator(WouldBe)]
