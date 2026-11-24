from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus3(str, Enum):
    """The status of the export. When the status is Completed the export is ready to download."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ExportStatus3OrStr: TypeAlias = Annotated[ExportStatus3 | str, open_enum_validator(ExportStatus3)]
