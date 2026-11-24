from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskLevel(str, Enum):
    """Output only. Risk level of the incident."""

    RISK_LEVEL_UNSPECIFIED = "RISK_LEVEL_UNSPECIFIED"
    LOW = "LOW"
    MODERATE = "MODERATE"
    SEVERE = "SEVERE"

    __str__ = str.__str__


RiskLevelOrStr: TypeAlias = Annotated[RiskLevel | str, open_enum_validator(RiskLevel)]
