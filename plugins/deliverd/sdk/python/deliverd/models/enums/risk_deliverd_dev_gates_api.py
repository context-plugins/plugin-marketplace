from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RiskDeliverdDevGatesApi(str, Enum):
    """How risky you judge it. Can raise, never lower, the action's own risk"""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

    __str__ = str.__str__


RiskDeliverdDevGatesApiOrStr: TypeAlias = Annotated[
    RiskDeliverdDevGatesApi | str, open_enum_validator(RiskDeliverdDevGatesApi)
]
