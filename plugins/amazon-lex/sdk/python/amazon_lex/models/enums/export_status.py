from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExportStatus(str, Enum):
    """The status of the export. When the status is Completed, you can use the DescribeExport operation to get the
    pre-signed S3 URL link to your exported bot or bot locale."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"
    DELETING = "Deleting"

    __str__ = str.__str__


ExportStatusOrStr: TypeAlias = Annotated[ExportStatus | str, open_enum_validator(ExportStatus)]
