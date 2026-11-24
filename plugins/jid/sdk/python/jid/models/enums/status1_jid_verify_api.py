from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1JidVerifyApi(str, Enum):
    ACTIVE = "active"
    ATTENTION = "attention"
    INACTIVE = "inactive"
    UNKNOWN = "unknown"

    __str__ = str.__str__


Status1JidVerifyApiOrStr: TypeAlias = Annotated[Status1JidVerifyApi | str, open_enum_validator(Status1JidVerifyApi)]
