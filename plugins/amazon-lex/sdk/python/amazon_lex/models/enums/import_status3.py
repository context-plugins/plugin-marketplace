from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportStatus3(str, Enum):
    """The current status of the import. When the status is Complete the bot, bot alias, or custom vocabulary is ready
    to use."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ImportStatus3OrStr: TypeAlias = Annotated[ImportStatus3 | str, open_enum_validator(ImportStatus3)]
