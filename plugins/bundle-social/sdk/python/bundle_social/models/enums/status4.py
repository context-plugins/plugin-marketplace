from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status4(str, Enum):
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    POSTED = "POSTED"
    ERROR = "ERROR"
    DELETED = "DELETED"
    PROCESSING = "PROCESSING"
    RETRYING = "RETRYING"

    __str__ = str.__str__


Status4OrStr: TypeAlias = Annotated[Status4 | str, open_enum_validator(Status4)]
