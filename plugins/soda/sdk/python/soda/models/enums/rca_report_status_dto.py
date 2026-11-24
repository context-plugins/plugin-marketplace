from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RcaReportStatusDto(str, Enum):
    COMPLETED = "completed"
    PARTIAL = "partial"
    INCONCLUSIVE = "inconclusive"
    FAILED = "failed"

    __str__ = str.__str__


RcaReportStatusDtoOrStr: TypeAlias = Annotated[RcaReportStatusDto | str, open_enum_validator(RcaReportStatusDto)]
