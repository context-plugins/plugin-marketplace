from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    PENDING = "pending"
    NOTIFIED = "notified"
    SIGNED = "signed"
    DECLINED = "declined"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
