from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    """Indicates the connection status, available only for SERVER_SCOPE."""

    ACTIVE = "active"
    PENDING = "pending"
    INVALID = "invalid"
    PRE_INIT = "pre-init"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
