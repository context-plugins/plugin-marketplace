from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of the new and old
    settings."""

    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
