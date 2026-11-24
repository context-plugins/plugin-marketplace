from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportStatus(str, Enum):
    """The current status of the deletion. When the deletion is complete, the import will no longer be returned by the
    ListImports operation and calls to the DescribeImport operation with the import identifier will fail."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ImportStatusOrStr: TypeAlias = Annotated[ImportStatus | str, open_enum_validator(ImportStatus)]
