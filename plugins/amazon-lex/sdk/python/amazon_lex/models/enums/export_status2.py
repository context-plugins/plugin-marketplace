from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus2(str, Enum):
    """The status of the export. When the status is Complete the export archive file is available for download."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ExportStatus2OrStr: TypeAlias = Annotated[ExportStatus2 | str, open_enum_validator(ExportStatus2)]
