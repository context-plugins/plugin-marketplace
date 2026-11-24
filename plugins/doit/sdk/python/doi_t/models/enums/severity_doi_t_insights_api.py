from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SeverityDoiTInsightsApi(str, Enum):
    """The severity level of the finding. Computed server-side from the security risk counts."""

    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

    __str__ = str.__str__


SeverityDoiTInsightsApiOrStr: TypeAlias = Annotated[
    SeverityDoiTInsightsApi | str, open_enum_validator(SeverityDoiTInsightsApi)
]
