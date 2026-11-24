from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportStatus1(str, Enum):
    """The status of the import process. When the status is Completed the resource is imported and ready for use."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ImportStatus1OrStr: TypeAlias = Annotated[ImportStatus1 | str, open_enum_validator(ImportStatus1)]
