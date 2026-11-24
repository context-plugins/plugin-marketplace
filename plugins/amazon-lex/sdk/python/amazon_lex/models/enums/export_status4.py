from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus4(str, Enum):
    """The status of the export. IN_PROGRESS - The export is in progress. READY - The export is complete. FAILED - The
    export could not be completed."""

    IN_PROGRESS = "IN_PROGRESS"
    READY = "READY"
    FAILED = "FAILED"

    __str__ = str.__str__


ExportStatus4OrStr: TypeAlias = Annotated[ExportStatus4 | str, open_enum_validator(ExportStatus4)]
