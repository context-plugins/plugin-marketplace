from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus5(str, Enum):
    """The status of the export. When the status is Completed the export archive is available for download."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ExportStatus5OrStr: TypeAlias = Annotated[ExportStatus5 | str, open_enum_validator(ExportStatus5)]
