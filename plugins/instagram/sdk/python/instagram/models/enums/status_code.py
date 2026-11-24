from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCode(str, Enum):
    EXPIRED = "EXPIRED"
    ERROR = "ERROR"
    FINISHED = "FINISHED"
    IN_PROGRESS = "IN_PROGRESS"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


StatusCodeOrStr: TypeAlias = Annotated[StatusCode | str, open_enum_validator(StatusCode)]
