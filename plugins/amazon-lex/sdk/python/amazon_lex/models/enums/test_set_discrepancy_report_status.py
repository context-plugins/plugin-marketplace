from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestSetDiscrepancyReportStatus(str, Enum):
    """The status for the test set discrepancy report."""

    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    FAILED = "Failed"

    __str__ = str.__str__


TestSetDiscrepancyReportStatusOrStr: TypeAlias = Annotated[
    TestSetDiscrepancyReportStatus | str, open_enum_validator(TestSetDiscrepancyReportStatus)
]
