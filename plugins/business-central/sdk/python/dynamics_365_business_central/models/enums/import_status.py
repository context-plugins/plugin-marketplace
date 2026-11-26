from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportStatus(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    ERROR = "Error"

    __str__ = str.__str__


ImportStatusOrStr: TypeAlias = Annotated[ImportStatus | str, open_enum_validator(ImportStatus)]
