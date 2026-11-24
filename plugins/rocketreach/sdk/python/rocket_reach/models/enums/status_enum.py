from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusEnum(str, Enum):
    COMPLETE = "complete"
    PROGRESS = "progress"
    SEARCHING = "searching"
    NOT_QUEUED = "not queued"

    __str__ = str.__str__


StatusEnumOrStr: TypeAlias = Annotated[StatusEnum | str, open_enum_validator(StatusEnum)]
