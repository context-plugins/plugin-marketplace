from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus1(str, Enum):
    """The current status of the deletion. When the deletion is complete, the export will no longer be returned by the
    ListExports operation and calls to the DescribeExport operation with the export identifier will fail."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ExportStatus1OrStr: TypeAlias = Annotated[ExportStatus1 | str, open_enum_validator(ExportStatus1)]
